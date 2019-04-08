"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
    res.send("TourBooker API");
});
app.listen(process.env.PORT || 8091, () => console.log("Server Started..."));
