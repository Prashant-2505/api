import express from 'express';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from "cors"

config({
    path: './data/config.env'
})


export const app = express();


// using middleware   always use middleware before any routes
app.use(express.json());
app.use(cookieParser())
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    }
))

// using routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)



app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});




/* This is a middleware function that handles errors. If any error occurs in the application, it will
be passed to this function. The function then sets the HTTP status code to 404 and returns a JSON
response with a success property set to false and a message property containing the error message. */
app.use(errorMiddleware) 