require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const PORT = 4000 || Process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.get("/", (req, res, next) => {
  res.send("heyy");
});

app.use("*", function (req, res, next) {
  res.status(404).send("Sorry, the resource you requested could not be found.");
});
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({ error: "Internal server error" });
});
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
