import { RequestHandler } from "express";
import { APIError } from "../../../model/shared/messages";
import { TourFilters } from "../../../model/shared/tourFilters";

export const apiCheckTourFilters: RequestHandler = (req, res, next) => {
    const filters = new TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(APIError.errInvalidQueryParameter({filter: filter}));
        }
    }
    next();
};