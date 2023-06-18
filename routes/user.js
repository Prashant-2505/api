import express from "express"
import {  login,logout, register,getMyProfile} from "../controller/user.js";
import { isAuthenticates } from "../middlewares/auth.js";
const router = express.Router();




router.post('/new', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isAuthenticates,getMyProfile);

// router.put('/userid/:id',updateUser);

// router.delete('/userid/:id',deleteUser);






export default router;
