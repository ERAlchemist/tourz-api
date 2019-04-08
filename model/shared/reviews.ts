export class Review {
    tourID: number
    reviewTitle: string
    reviewLongText: string
    stars: number
    constructor(data: any) {
        this.tourID = data.tour_id
        this.reviewTitle = data.review_title;
        this.reviewLongText = data.review_long_text;
        this.stars = data.stars;
    }
}