const jsonTours = require("./tours.json");
const jsonReviews = require("./reviews.json");

interface Account {
    email: string
    password: string
}

export class DataStore {
    static tours: any[] = jsonTours;
    static reviews: any[] = jsonReviews;
    static accounts: Account[] = []
}
