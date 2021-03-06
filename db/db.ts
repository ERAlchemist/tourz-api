import * as pgPromise from "pg-promise";
require("dotenv").config();

export const pgp = pgPromise();


export const db = pgp(`postgres://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}`);
