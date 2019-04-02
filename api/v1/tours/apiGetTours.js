"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tourSummary_1 = require("../../model/shared/tourSummary");
const tourFilters_1 = require("../../model/shared/tourFilters");
exports.apiGetTours = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    const filteredData = data_1.DataStore.tours.filter((item) => {
        let conditions = [
            filters.location ? (item.location == filters.location) : true,
            filters.priceMin ? (item.price > filters.priceMin) : true,
            filters.priceMax ? (item.price < filters.priceMax) : true
        ];
        return conditions.every(value => value == true);
    });
    res.json(filteredData.map((item) => new tourSummary_1.TourSummary(item)));
};
