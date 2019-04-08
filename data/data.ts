const jsonTours = require("./tours.json");
const jsonReviews = require("./reviews.json");

export class DataStore {
    static tours: any[] = jsonTours;
    static reviews: any[] = jsonReviews;
}