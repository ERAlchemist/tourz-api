import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import { db } from "../../../db/db";
import { tours } from "../../../db/queries/sql";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    db.none(tours.delete, {id: tourID}).then(() => {
        res.json(PublicInfo.infoDeleted());
    });
};