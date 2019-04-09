import { RequestHandler } from "express";
import { TourDetail } from "../../../model/shared/tourDetail";
import { fileMapper } from "../general/static";
import { APIError } from "../../../model/shared/messages";
import { db } from "../../../db/db";
import { tours } from "../../../db/queries/sql";

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    db.one(tours.getDetail, {id: tourID}).then(selectedTour => {
        const imageURLs = selectedTour.img.map(fileMapper(req.app.get("env")));
        db.any(tours.getAllReviews, {tourID: tourID}).then(selectedReviews => {
            res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
        });
    })
    .catch(err => {
        next(APIError.errNotFound());
    });
};