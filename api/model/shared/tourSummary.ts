import * as dbModel from "../../db/model_generated";

export class TourSummary {
    id: string
    location: string
    tourTitle: string
    constructor(data: dbModel.tours) {
        this.id = data.id;
        this.location = data.location;
        this.tourTitle = data.tour_title
    }
}