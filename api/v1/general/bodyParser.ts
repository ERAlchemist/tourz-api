import * as bodyparser from "body-parser";
export const jsonParser = bodyparser.json();
export const urlEncodedParser = bodyparser.urlencoded({extended: true});