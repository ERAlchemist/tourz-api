import { RequestParamHandler } from "express";
import { dateFormat } from "../../../../config";
import { APIError } from "../../../../model/shared/messages";
import { parse } from "querystring";

export const dateParam: RequestParamHandler = (req, res, next, value, name) => {
    const parsedComponents = dateFormat.exec(value);
    if (parsedComponents) {
        console.log(parsedComponents);
        const [_, year, month, day] = parsedComponents.map((item) => parseInt(item));
        const date = new Date(year, month-1, day);
        req.params[name] = date;
        next()
    }
    else {
        next(new APIError("Parse Error", "Date could not be parsed. Date Format: YYYY/MM/DD.", 400));
    }
};