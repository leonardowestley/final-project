import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { questionRouter } from "./question.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(questionRouter);

// app.listen(3030, () => {
//   console.log("Listening on PORT: 3030");
// });

export const api = functions.https.onRequest(app);
