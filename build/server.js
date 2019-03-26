"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res, next) => {
    res.send("Tour Booking API");
});
app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours....");
});
app.post("/tours", (req, res, next) => {
    res.send("Add a new tour...");
});
app.listen(process.env.PORT || 8091, () => { console.log("Server started..."); });
