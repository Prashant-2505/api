import mongoose from "mongoose";

export const connectDb = () => {

    mongoose
        .connect(process.env.MONGO_URI, {

        })
        .then(() => console.log('MongoDB is connected'))
        .catch((e) => console.log(e));
}