import { Message } from "../models/messageModel.js";

export const sentMessage = async (req, res) => {
  const { currentPlan, firstName, lastName, email, phoneNumber, message } = req.body;
  try {
    const newMessage = await Message.sendMessage(
      currentPlan,
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );
    res.status(201).json({ newMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
