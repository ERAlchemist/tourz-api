"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCors = (req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE"
    });
    next();
};
