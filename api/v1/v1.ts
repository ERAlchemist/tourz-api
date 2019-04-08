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

export let routerV1 = Router();

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use("/static", express.static(path.join(__root, "public", "img")));

routerV1.get("/", (req, res, next) => {
    res.send("TourBooking API");
    
});

routerV1.use("/users", userRouter);

routerV1.use("/tours", toursRouter);

routerV1.get("/static/download/:id", apiDownloadImage);

routerV1.use(apiErrorHandler);