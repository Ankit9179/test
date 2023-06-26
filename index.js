const express = require("express");

const app = express();

const port = 8081;

app.get("/", (req, res) => {
  res.send("hello form testing");
});

app.listen(port, () => {
  console.log(`server is runnlig on port ${port}`);
});
