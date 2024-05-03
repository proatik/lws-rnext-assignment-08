import { Schema, models, model } from "mongoose";

// define the user schema for the user model
const userSchema = new Schema({
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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: [String],
});

// create the user model based on the user schema
const User = models?.user ?? model("user", userSchema);

export default User;
