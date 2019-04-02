"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("./tourSummary");
const reviews_1 = require("./reviews");
class TourDetail extends tourSummary_1.TourSummary {
    constructor(tourData, reviewData, tourImages) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.img = tourImages;
        this.reviews = reviewData.map((item) => new reviews_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
