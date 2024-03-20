import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import path from "path";
import * as url from "url";
import { messageRoute } from "./routes/messages.js";

const directory = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.json());

app.use(express.static(path.join(directory, "../client/dist")));

app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(directory, "../client/dist/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
