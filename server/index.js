const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const summaryModel = require("./models/100days");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://lukostelloe:12rudimental@100daysofcodecluster.w2vqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const days = req.body.day;
  const dones = req.body.done;
  const moods = req.body.mood;

  const summary = new summaryModel({ day: days, done: dones, mood: moods });

  try {
    await summary.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  summaryModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
