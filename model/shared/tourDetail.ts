import { TourSummary } from "./tourSummary";
import { Review } from "./reviews";

export class TourDetail extends TourSummary {
    tourCategory: string
    tourDescription: string
    price: number
    currency: string
    reviews: Review[]
    constructor(tourData: any, reviewData: any) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.reviews = reviewData.map((item: any) => new Review(item));
    }
}