"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const messages_1 = require("../../model/shared/messages");
exports.apiDownloadImage = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path_1.default.resolve("./", "public", "img", fileID), err => {
        if (err) {
            next(new messages_1.APIError("Download failed.", "Cannot download requested file.", 400));
        }
    });
};
