import express from "express"
import { getAllUser, getUserDetails, register } from "../controller/user.js";
const router = express.Router();

router.get('/all', getAllUser);



router.get('/userid/special', (req, res) => {
    res.json({
        success: true,
        meesage: "just joking"
    })
})

router.get('/userid/:id',getUserDetails);


router.post('/new',register);


export default router;
