import express from "express";
import mongoose from "mongoose";
require("dotenv").config();
const app = express();
const userName = process.env["NAME"];
const passWord = process.env["PASSWORD"];
const cluster = process.env["CLUSTER"];

main().catch((err) => console.log(err));

async function main() {
  const uri = `mongodb+srv://${userName}:${passWord}@${cluster}/?retryWrites=true&w=majority`;
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("Connected to DB...");
  app.listen(3000, () =>
    console.log("Server is running on http://localhost:3000")
  );
}
