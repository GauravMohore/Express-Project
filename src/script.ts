import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("Request made");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("Call me on 9131122182");
});

app.get("/app", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Serve the index.html file
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
