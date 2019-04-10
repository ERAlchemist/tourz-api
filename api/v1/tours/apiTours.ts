import { Router } from "express";
import { apiCheckTourFilters } from "./apiCheckTourFilters";
import { apiGetTourDetail } from "./apiGetTourDetail";
import { apiCreateTour } from "./apiCreateTour";
import { apiDeleteTour } from "./apiDeleteTour";
import { apiUpdateTour } from "./apiUpdateTour";
import { apiUploadImage } from "./apiUploadImage";
import { apiGetTours } from "./apiGetTours";
import { jsonParser } from "../general/bodyParser";
import { cacheCheck } from "../general/caching"; 

export let toursRouter = Router();

toursRouter.route("/")
    .get(cacheCheck, apiCheckTourFilters, apiGetTours)
    .post(jsonParser, apiCreateTour);

toursRouter.route("/:id")
    .get(apiGetTourDetail)
    .delete(apiDeleteTour)
    .patch(jsonParser, apiUpdateTour);

toursRouter.post("/:id/img", apiUploadImage);