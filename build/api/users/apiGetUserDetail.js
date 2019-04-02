"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetUserDetail = (req, res, next) => {
    res.send("Details for User with id " + req.params.id);
};
