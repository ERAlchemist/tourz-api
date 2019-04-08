import { RequestHandler } from "express";

export const apiAddUser: RequestHandler = (req, res, next) => {
    res.send("User added");
};