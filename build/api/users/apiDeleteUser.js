"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDeleteUser = (req, res, next) => {
    res.send("User deleted with id " + req.params.id);
};
