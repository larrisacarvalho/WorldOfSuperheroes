const express = require("express");
const cors = require("cors");

const data = require("./apiData");
const quizData = require("./quizQuestions");
const { applyEach } = require("async");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "./frontEnd/worldofsuperheroes/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontEnd/worldofsuperheroes/build", "index.html"));
});

app.get("/api", (req, res) => {
    res.json(data);
});

app.get("/quizData",(req,res) => {
    console.log(quizData);
    res.json(quizData);
});

app.listen(5000, () => {
    console.log("server is running on port 5000.");
})