import { RequestHandler } from "express";
import { TourDetail } from "../../../model/shared/tourDetail";
import { fileMapper } from "../general/static";
import { APIError } from "../../../model/shared/messages";
import { db } from "../../../db/db";

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    db.one("select * from tours where id = $1", [tourID]).then(selectedTour => {
        if (selectedTour) {
            const imageURLs = selectedTour.img.map(fileMapper(req.app.get("env")));
            db.any("select * from reviews where tour_id = $1", [tourID]).then(selectedReviews => {
                res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
            });
        }
        else {
            next(APIError.errNotFound());
        }
    });
};