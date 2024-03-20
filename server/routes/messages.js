import express from "express";
import { sentMessage } from "../controllers/messageController.js";

export const messageRoute = express.Router();

messageRoute.post("/send", sentMessage);
