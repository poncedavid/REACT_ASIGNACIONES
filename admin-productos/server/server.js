import express from "express";
import cors from "cors";
import router from "./routes/index.js";

import dotenv from "dotenv";
dotenv.config();

import { databaseConnection } from "./config/connection.js";
databaseConnection();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`El servidor esta corriendo en el puerto:${PORT}`)
);
