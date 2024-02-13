const express = require("express");
const app = express();
const mysql = require("mysql2");
const food = require("./routes/foods");
const user = require("./routes/users");
const comment = require("./routes/comments");
const foodTypes = require("./routes/foodTypes");
const like = require("./routes/likes");
const port = process.env.PORT;
require("./cors")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static("/images"));
app.set("view engine", "ejs");
app.use("/foods", food);
app.use("/users", user);
app.use("/comments", comment);
app.use("/foodTypes", foodTypes);
app.use("/likes", like);

app.listen(port || 3001, () => {
  console.log(`server running on port ${port}`);
});
