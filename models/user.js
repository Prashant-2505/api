import mongoose from "mongoose";

mongoose

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export const User = mongoose.model('User', schema); // Use "User" instead of "user" for the model
