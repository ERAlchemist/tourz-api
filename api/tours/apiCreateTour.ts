import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/messages";

export const apiCreateTour: RequestHandler = (req, res, next) => {
    const requiredFields = ["tourTitle", "location"];
    const givenFields = Object.getOwnPropertyNames(req.body)
    if(!requiredFields.every(field => givenFields.includes(field))) {
        return next(APIError.errMissingBody());
    };
    const newTour = {
        id: uuid(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    }
    DataStore.tours.push(newTour);
    res.json(PublicInfo.infoCreated({newTour: newTour}));
};