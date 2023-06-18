import { app } from "./app.js";
import {connectDb} from "./data/databse.js"
connectDb()


app.listen(4000, () => {
    console.log(`Server is running on port :${process.env.PORT} in ${process.env.NODE_ENV}`);
});
