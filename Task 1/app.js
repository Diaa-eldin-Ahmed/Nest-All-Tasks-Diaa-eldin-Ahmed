const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 3003;

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

// app.use("/users/:id", (req, res, next) => {
//   console.log("User ID is: ",req.params.id);
//   next();
// });

app.use("/users", usersRouter);

// error handler
app.listen(port, () => {
    console.log("Express Task working on port " + port);
});

module.exports = app;
