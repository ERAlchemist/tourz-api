import { Router } from "express";
import { logger } from "./general/logging";
import { apiCors } from "./general/cors";
import { apiValidation } from "./general/validation";
import * as express from "express";
import * as path from "path";
import { userRouter } from "./users/apiUsers";
import { toursRouter } from "./tours/apiTours";
import { apiDownloadImage } from "./tours/apiDownloadImage";
import { apiErrorHandler } from "./general/errorHandling";
import { __root } from "../../config";
import { urlEncodedParser, jsonParser } from "./general/bodyParser";
import { apiTokenSignin } from "./auth/tokenSignin";
import { apiSessionVerify } from "./auth/sessionVerify";
import { apiLocalSignup } from "./auth/localSignup";
import { apiLocalSignin } from "./auth/localSignin";
import * as RateLimiter from "express-rate-limit";
import * as slowDown from "express-slow-down";

export let routerV1 = Router();

// const speedLimiter =  slowDown({
//     windowMs: 60 * 1000,
//     delayAfter: 10,
//     delayMs: 0
// });

const limiter =  new RateLimiter({
    windowMs: 60 * 1000,
    max: 10
});


routerV1.use(limiter);

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use(apiSessionVerify);

routerV1.use("/static", express.static(path.join(__root, "public", "img")));

routerV1.get("/", (req, res, next) => {
    res.send("TourBooking API");
    
});

routerV1.use("/users", userRouter);

routerV1.use("/tours", toursRouter);

routerV1.get("/static/download/:id", apiDownloadImage);

routerV1.post("/tokensignin", urlEncodedParser, apiTokenSignin);

routerV1.post("/localsignup", jsonParser, apiLocalSignup);

routerV1.post("/localsignin", jsonParser, apiLocalSignin);

routerV1.use(apiErrorHandler);