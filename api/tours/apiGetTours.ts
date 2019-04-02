import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

import {TourSummary} from "../../model/shared/tourSummary";
import { TourFilters } from "../../model/shared/tourFilters";

export const apiGetTours: RequestHandler = (req, res, next) => {
    const filters = new TourFilters(req.query);
    const filteredData = DataStore.tours.filter((item: any) => {
        let conditions = [
            filters.location ? (item.location == filters.location) : true,
            filters.priceMin ? (item.price > filters.priceMin) : true,
            filters.priceMax ? (item.price < filters.priceMax) : true
        ];
        return conditions.every(value => value == true);
    });
    res.json(filteredData.map((item: any) => new TourSummary(item)));
};