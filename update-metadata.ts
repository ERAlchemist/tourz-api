require("dotenv").config();
`node_modules/.bin/schemats generate -c postgres://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}`;