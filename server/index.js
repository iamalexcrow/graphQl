const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const { connect } = require("mongoose");
const port = process.env.PORT || 5000;

const app = express();

//CONNECT TO DB
connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
    // graphiql: true,
  })
);
console.log(
  'process.env.NODE_ENV === "development"',
  process.env.NODE_ENV === "development"
);
app.listen(port, console.log(`Server running on port ${port}`));
