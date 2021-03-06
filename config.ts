require("dotenv").config();
export const __root = __dirname;
export const dateFormat = new RegExp("(\\d{4})-(\\d{1,2})-(\\d{1,2})");
export const idFormat = "\\d{4}";

export const sessionTokenSecret = `${process.env.SECRET}`;
export const sessionTokenLifetime = 60 * 60 * 2;