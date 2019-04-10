import { RequestHandler } from "express";
import { CustomRequestHandler } from "../../../model/express";
import * as jwt from "jsonwebtoken";
import { sessionTokenSecret } from "../../../config";
import * as dbModel from "../../../db/model_generated";
import { db } from "../../../db/db";
import { APIError } from "../../../model/shared/messages";

export const apiSessionVerify: CustomRequestHandler = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, sessionTokenSecret, (err, decoded: any) => {
            if (err) {
                next(APIError.errUnauthorized());
            }
            else {
                const userId = decoded.userId;
                db.one("select * from users where id = ${userId}", {userId: userId}).then((user: dbModel.users) => {
                    console.log(user);
                    req.user = user;
                    next();
                });
            }
        });
    }
    else {
        next();
    }
};