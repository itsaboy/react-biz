import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import express from "express";
import path from "path";
import * as url from "url";

const directory = url.fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(directory, "../client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
