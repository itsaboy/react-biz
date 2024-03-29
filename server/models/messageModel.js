import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  currentPlan: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

messageSchema.statics.sendMessage = async function (
  currentPlan,
  firstName,
  lastName,
  email,
  phoneNumber,
  message
) {
  if (!validator.isEmail(email)) {
    throw Error("Invalid email address");
  }

  const newMessage = await this.create({
    currentPlan,
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  return newMessage;
};

export const Message = mongoose.model("Message", messageSchema);
