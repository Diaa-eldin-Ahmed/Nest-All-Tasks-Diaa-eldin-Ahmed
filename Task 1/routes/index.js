const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send(
        "Hello Eng. Omar, I'm Diaa-eldin Ahmed and this is my first task at Nest JS using Express"
    );
});

module.exports = router;
