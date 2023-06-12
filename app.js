import express from 'express';
import userRouter from './routes/user.js'
import {config} from 'dotenv'
config({
    path:'./data/config.env'
})


export const app = express();
const router = express.Router()

// using middleware
app.use(express.json());
app.use("/users",userRouter)


app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});




