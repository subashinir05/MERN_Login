import express from "express";
import cors from "cors";
import collection from "./mongo.js"; // Make sure to update the extension to `.js`

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("yes");
    } else {
      res.json("no");
    }
  } catch (e) {
    res.json("no");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = { email, password };
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("yes");
    } else {
      await collection.insertMany([data]);
      res.json("no");
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(4000, () => {
  console.log("Running on port 4000");
});
