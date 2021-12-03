import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos.js";

const router = express.Router();
router.use(express.json());

router.post("/", createTodo);

router.get("/", getTodos);

router.get("/:id", getTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
