import { RequestHandler } from "express";
import * as path from "path";
import { __root } from "../../../config";
import { APIError } from "../../../model/shared/messages";

export const apiDownloadImage: RequestHandler = (req, res, next) => {
    const imageID = req.params.id;
    res.download(path.join(__root, "public", "img", imageID), (err) => {
        if (err) {
            next(APIError.errServerError());
        }
    });
};