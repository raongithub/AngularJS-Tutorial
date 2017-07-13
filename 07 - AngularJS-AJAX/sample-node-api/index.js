var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

var router = express.Router();

router.get("/Sum", function (req, res) {
 var num1 = req.query.num1;
 var num2 = req.query.num2;
 var sum = parseInt(num1) + parseInt(num2);

 res.status(200).json(sum);
});

app.use("/", router);
app.listen("4467", function () {
    console.log("Started listening at port 4467...");
});