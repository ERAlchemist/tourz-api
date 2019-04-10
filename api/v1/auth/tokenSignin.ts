import { RequestHandler } from "express";
import * as uuid from "uuid/v4";
import * as dbModel from "../../../db/model_generated";
import { OAuth2Client } from "google-auth-library";
import { TokenPayload } from "../../../node_modules/google-auth-library/build/src/auth/loginticket";
import { db, pgp } from "../../../db/db";
import { CustomRequestHandler } from "../../../model/express";
import { apiSessionGenerate } from "./sessionGenerate";
const CLIENT_ID = "1003309333518-q4o99up9h9tks4mt25eq8cravsfgepe9.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

export const apiTokenSignin: CustomRequestHandler = (req, res, next) => {
    client.verifyIdToken({
        idToken: req.body.idtoken,
        audience: CLIENT_ID
    }).then(ticket => {
        const payload = ticket!.getPayload() as TokenPayload;
        const email = payload.email as string;
        db.one("select * from users where email = ${email}", {email: email}).then((user: dbModel.users) => {
            // Generate Session Token
            req.user = user;
            apiSessionGenerate(req,res,next);
        })
        .catch(err => {
            if (err.code == pgp.errors.queryResultErrorCode.noData) {
                // Create User
                const user: dbModel.users = {
                    id: uuid(),
                    email: email,
                    family_name: payload.family_name || null,
                    given_name: payload.given_name || null
                }
                db.none(pgp.helpers.insert(user, undefined, "users")).then(() => {
                    // Generate Session Token
                    req.user = user;
                    apiSessionGenerate(req,res,next);
                });
            }
        });
    });
};