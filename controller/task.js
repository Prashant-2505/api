import ErrorHandler from "../middlewares/error.js"
import { Task } from "../models/task.js"

export const newTask = async (req, res, next) => {
  const { title, description } = req.body
  await Task.create({
    title,
    description,
    user: req.user
  })

  res.status(200).json({
    succss: "true",
    message: "task created"
  })
}

export const getMyTask = async (req, res, next) => {
  const userId = req.user._id
  // find method return array

  const task = await Task.find({ user: userId })
  res.status(200).json({
    success: "true",
    task
  })
}

export const updateTask = async (req, res, next) => {

  const { id } = req.params
  const task = await Task.findById(id)

  if (!task) return next(new ErrorHandler("invalid id", 404))

  task.isCompleted = !task.isCompleted
  await task.save()

  res.status(200).json({
    success: "true",
    message: "task updated"
  })
}

export const deleteTask = async (req, res, next) => {

  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) return next(new ErrorHandler("invalid id", 404))


  await task.deleteOne();

  return res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
}


