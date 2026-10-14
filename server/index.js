const express = require("express");
const fs = require("node:fs");
const cors = require("cors");
const app = express();
app.use(cors({ origin:"http://127.0.0.1:8080"}));

const PORT = 3000;
let i = 1;
app.use(express.json());


// const fileData = fs.readFile('server/file.csv', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data)
// });

// app.get("/home", (req, res) =>{
//   const count = i++;
//   res.json({count, message: "yipee"});
//   // res.sendStatus(200);
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
