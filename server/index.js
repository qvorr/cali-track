const express = require("express");
const fs = require("node:fs");
const sqlite = require('better-sqlite3');
const db = new sqlite("fit.db");

const cors = require("cors");
const app = express();
app.use(cors({ origin:"http://127.0.0.1:3020"}));
app.use(express.json());

const PORT = 3000;
let i = 1;

let exercises = {
  back: ["pull up", "oap assisted"],
  chest: ["dips", "one arm pushups", "normal push-ups"],
  legs: [],
}

app.get("/exercises", (req, res) => {
  res.json(exercises);
})

// app.get("/exercises/chest", (req, res) => {
//   res.json(exercises.chest);
// });
// 
// app.get("/exercises/back", (req, res) => {
//   res.json(exercises.back);
// });
// 
// app.get("/exercises/legs", (req, res) => {
//   res.json(exercises.legs);
// });

app.get("/exercises/:group", (req, res) => {
  const groupName = req.params.group;
  
  try {
    const catStmnt = db.prepare(`SELECT category_id.id FROM category_id WHERE category_id.name LIKE ?`);
    const categoryID = catStmnt.get(groupName);
    const exercisesStmnt = db.prepare(`SELECT exercise.name FROM exercise WHERE exercise.category=?`);
    const exercisesList = exercisesStmnt.all(categoryID.id);
    res.json(exercisesList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/exercises/:group/add/:exercise", (req, res) => {
  // const groupName = req.params.group;
  // const exerciseName = req.params.exercise;
  // try {
  //   
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: error.message });
  // }
  res.sendStatus(201);
});

// const fileData = fs.readFile('server/file.csv', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data)
// });
// 
// app.get("/:id", (req, res) =>{
//   let total = 0;
//   for (j in req.params.id) {
//     thisNum = Number(req.params.id.charAt(j));
//     total += thisNum;
//   }
//   res.json({number: total });
// })

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
