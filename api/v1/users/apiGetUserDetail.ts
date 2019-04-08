import { RequestHandler } from "express";

export const apiGetUserDetail: RequestHandler = (req, res, next) => {
    res.send("Details for User with id " + req.params.id);
};