const express = require("express");
const app = express();
const router = require("../src/routes/web.routes.js");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

app.use("/", router);

app.listen(3000, () => console.log("Server ready on port 3000."));
