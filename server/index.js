const express = require("express");
const fs = require("node:fs");
const cors = require("cors");
const app = express();
app.use(cors({ origin:"http://127.0.0.1:3020"}));
app.use(express.json());

const PORT = 3000;
let i = 1;

const exercises = {
  back: ["pull up", "oap assisted"],
  chest: ["dips", "one arm pushups"]
}


app.get("/info", (req, res) =>{
  console.log("I received it");
  res.send("bro finally");
  // res.sendStatus(200);
});

app.get("/exercises", (req, res) => {
  res.json(exercises);
})

app.get("/exercises/chest", (req, res) => {
  res.json(exercises.chest);
});

app.get("/exercises/back", (req, res) => {
  res.json(exercises.back);
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
