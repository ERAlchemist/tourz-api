import { RequestHandler } from "express";
import * as staticFileService from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { db } from "../../../db/db";

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const upload = staticFileService.getFileUploader(req.app.get("env"));
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            next(APIError.errServerError());
        }
        else {
            const sql = "update tours set img = array_append(img, $1) where id = $2";
            db.none(sql, [req.file.filename, tourID]).then(() => {
                res.json(PublicInfo.infoCreated({uploadedFile: req.file.filename}));
            });
        }
    });
};