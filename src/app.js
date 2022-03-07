"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 4000;
app.listen(PORT, function () {
    console.log("\u2705 Connect Server. localhost:".concat(PORT));
});
