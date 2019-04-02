import { Router } from "express";
import express = require("express");
import path from "path";

import { logger } from "./general/logging";
import { apiCors } from "./general/cors";
import { apiValidation } from "./general/validation";
import { userRouter } from "./users/apiUsers";
import { toursRouter } from "./tours/apiTours";
import { apiDownloadImage } from "./tours/apiDownloadImage";
import { apiErrorHandler } from "./general/errorHandling";

export const routerV1 = Router();

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use("/static", express.static(path.resolve("./", "public", "img")));

routerV1.get("/", (req, res) => {
    res.send("TourBooking API");
});

routerV1.use("/users", userRouter);

routerV1.use("/tours", toursRouter);

routerV1.get("/static/download/:id", apiDownloadImage);

routerV1.use(apiErrorHandler);