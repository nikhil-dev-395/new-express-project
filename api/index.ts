const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel , hi this is updated by nikhil"));

app.listen(3000, () => console.log("Server ready on port 3000."));
