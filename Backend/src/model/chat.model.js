import mongoose from "mongoose";

const messageItemSchema = new mongoose.Schema(
  {
    problem: { type: String, required: true },
    solution_1: { type: String, default: "" },
    solution_2: { type: String, default: "" },
    judgeResult: {
      solution_1_score: { type: Number, default: 0 },
      solution_2_score: { type: Number, default: 0 },
      solution_1_reasoning: { type: String, default: "" },
      solution_2_reasoning: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: "New Chat",
      trim: true,
    },
    messages: [messageItemSchema],
  },
  { timestamps: true }
);

const chatModel = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default chatModel;
