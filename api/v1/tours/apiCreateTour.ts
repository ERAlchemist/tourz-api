import { RequestHandler } from "express";

import * as uuid from "uuid/v4";
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { db, pgp } from "../../../db/db";

export const apiCreateTour: RequestHandler = (req, res, next) => {
    if (!req.body) {
        next(APIError.errMissingBody());
    }
    const newTour = {
        id: uuid(),
        location: req.body.location || "",
        tour_title: req.body.tourTitle || "",
        tour_category: req.body.tourCategory || "",
        tour_description: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    }
    db.none(pgp.helpers.insert(newTour, undefined, "tours")).then(() => {
        res.json(PublicInfo.infoCreated({newTour: newTour})); 
    });   
};