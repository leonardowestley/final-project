import { Router } from "express";
import { createQuestion, getQuestions, updateQuestions } from "./questions.js";

export const questionRouter = Router();

questionRouter.get("/questions", getQuestions);

// questionRouter.post("/questions", createQuestion);
questionRouter.post("/questions", async (req, res) => {
  const result = await createQuestion(req.body);
  res.status(201).send(result);
});

questionRouter.patch("/questions", updateQuestions);
