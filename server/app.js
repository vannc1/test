import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import logger from "morgan";
import router from "./routers/main.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//setup port
app.use("/api/", router);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Wellcome to Project with Nodejs Express and MongooDB",
  });
});
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

//setup router
app.listen(process.env.PORT, () => {
  console.log(`Our server is running on port ${process.env.PORT}`);
});

export default app;
