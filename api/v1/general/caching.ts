import { RequestHandler } from "express";
import { cache } from "../../../cache/cache";

export const cacheCheck: RequestHandler = (req, res, next) => {
    cache.get(req.originalUrl, (err, data) => {
        if (!err && data != undefined) {
            res.json(data);
        }
        else next(); 
    });
};

export function cacheSave(data: any): RequestHandler {
    return (req, res, next) => {
        cache.set(req.originalUrl, data);
    };
}