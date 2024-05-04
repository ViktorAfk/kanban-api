import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },

  boardId: {
    type: String,
    required: true,
  },

  index: {
    type: Number,
    required: true,
  },

  cratedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const TodoModel = mongoose.model("Todos", TodoSchema);
