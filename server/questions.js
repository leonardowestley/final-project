import { getDb } from "./db.js";
import mongo from "mongodb";

const getCollection = async () => {
  const db = await getDb();
  return db.collection("questions");
};

export const createQuestion = async ({
  description,
  option1,
  option2,
  option3,
  option4,
  option5,
}) => {
  const col = await getCollection();
  const insertedResults = await col.insertOne({
    description,
    option1,
    option2,
    option3,
    option4,
    option5,
  });

  return insertedResults.insertedId;
};

export const getQuestions = async (req, res) => {
  const col = await getCollection();
  const ret = await col.find({}).toArray();

  res.status(200).send(ret);
};

export const updateQuestions = async (req, res) => {
  const id = req.body.id;
  const col = await getCollection();
  const ret = await col.updateOne(
    { _id: mongo.ObjectId(id) },
    { $set: { response: req.body.response } }
  );
  res.status(200).send(`You have chosen ${req.body.response}!`);
};
