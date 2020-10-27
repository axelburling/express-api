const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routs
const posts = require("./Routes/posts");

//Middleware
app.use("/posts", posts);

//DB connect
mongoose.connect(
  process.env.DB_Conection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//GET routs
app.get("/", (req, res) => {
  res.send("Homepage baby");
});

//Listener
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log(`Listining on http://localhost:${PORT}`));
