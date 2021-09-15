const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome To The Node API Server at ${new Date()}`);
});

app.listen(process.env.PORT || 5000);
