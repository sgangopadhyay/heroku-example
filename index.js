const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome To The Node API Server at ${new Date()}`);
});

app.listen(3010, () => console.log("server listening at port 3010"));
