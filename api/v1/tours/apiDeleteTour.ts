import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import { db } from "../../../db/db";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    db.none("delete from tours where id = $1", [tourID]).then(() => {
        res.json(PublicInfo.infoDeleted());
    });
};