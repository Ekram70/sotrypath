const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const UsersModel = mongoose.model('users', UserSchema);

module.exports = UsersModel;
