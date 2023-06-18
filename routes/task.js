import express from "express";
import { newTask ,getMyTask,updateTask,deleteTask} from "../controller/task.js";
import { isAuthenticates } from "../middlewares/auth.js";

const router = express.Router()

router.post("/new",isAuthenticates, newTask)
router.get("/my",isAuthenticates, getMyTask)
router.route("/:id").put(isAuthenticates,updateTask).delete(isAuthenticates,deleteTask)

export default router;