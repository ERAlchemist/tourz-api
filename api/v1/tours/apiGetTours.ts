import { RequestHandler } from "express";

import {TourSummary} from "../../../model/shared/tourSummary";
import { TourFilters } from "../../../model/shared/tourFilters";
import { db } from "../../../db/db";
import { tours } from "../../../db/queries/sql";
import * as dbModel from "../../../db/model_generated";
import { cacheSave } from "../general/caching"; 

export const apiGetTours: RequestHandler = (req, res, next) => {
    const filters = new TourFilters(req.query);
    db.any(tours.search, {searchCondition: filters.getCondition()})
        .then((tours: dbModel.tours[]) => {
            const responseData = tours.map((item) => new TourSummary(item));
            cacheSave(responseData);
            res.json(responseData);
    });
};