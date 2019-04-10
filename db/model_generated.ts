/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2018-08-02 10:29:52 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres:/</>dbURL> -t reviews -t users -t tours -s public
 *
 */


export namespace reviewsFields {
    export type id = string;
    export type tour_id = string;
    export type review_title = string;
    export type review_long_text = string | null;
    export type stars = number;

}

export interface reviews {
    id: reviewsFields.id;
    tour_id: reviewsFields.tour_id;
    review_title: reviewsFields.review_title;
    review_long_text: reviewsFields.review_long_text;
    stars: reviewsFields.stars;

}

export namespace usersFields {
    export type id = string;
    export type email = string;
    export type family_name = string | null;
    export type given_name = string | null;

}

export interface users {
    id: usersFields.id;
    email: usersFields.email;
    family_name: usersFields.family_name;
    given_name: usersFields.given_name;

}

export namespace toursFields {
    export type id = string;
    export type location = string;
    export type tour_title = string;
    export type tour_category = string;
    export type tour_description = string | null;
    export type price = number;
    export type currency = string;
    export type img = Array<string> | null;
    export type user_id = string | null;

}

export interface tours {
    id: toursFields.id;
    location: toursFields.location;
    tour_title: toursFields.tour_title;
    tour_category: toursFields.tour_category;
    tour_description: toursFields.tour_description;
    price: toursFields.price;
    currency: toursFields.currency;
    img: toursFields.img;
    user_id: toursFields.user_id;

}