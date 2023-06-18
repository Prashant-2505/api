import mongoose from "mongoose";

export const connectDb = () => {

    mongoose
        .connect(process.env.MONGO_URI, {

        })
        .then((c) => console.log(`MongoDB is connected at ${c.connection.host}`))
        .catch((e) => console.log(e));
}