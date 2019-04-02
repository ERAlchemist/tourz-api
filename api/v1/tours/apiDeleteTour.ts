import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex);
        res.json(PublicInfo.infoDeleted());
    }
    else {
        next(APIError.errNotFound());
    }
};