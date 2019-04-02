"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tours_json_1 = require("./tours.json");
const reviews_json_1 = require("./reviews.json");
class DataStore {
}
DataStore.tours = tours_json_1.default;
DataStore.reviews = reviews_json_1.default;
exports.DataStore = DataStore;
