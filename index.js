const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/date", (request, response) => {
  const newDate = new Date();
  response.send(`Today's date is ${newDate}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
