const mongoose = require('mongoose');
const { Schema } = mongoose;
const uuidv4 = require('uuid').v4;

const optionSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: () => uuidv4(),
  },
  choice: {
    type: String,
    required: false,
    default: null,
  },
  storypart: {
    type: String,
    required: true,
  },
  options: [this],
});

const questSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: () => uuidv4(),
  },
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  options: [optionSchema],
});

const Story = mongoose.model('Story', questSchema);

module.exports = Story;
