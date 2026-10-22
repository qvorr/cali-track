// import * as api from "./api.js";

const exercisesButtonEl = document.querySelector(".exercises");
const getChestButtonEl = document.querySelector(".getChest");
const getBackButtonEl = document.querySelector(".getBack");
const getLegsButtonEl = document.querySelector(".getLegs");
const getForm = document.querySelector(".textArea");
const getTextField = document.querySelector(".field");
const clearFieldButtonEl = document.querySelector(".clearResults");

const getResultArea = document.querySelector(".results");
const serverURL = "http://127.0.0.1:3000/";

async function fetchInfo(request) {
  const data = await fetch(serverURL + request);
  const result = await data.json();
  return result;
}

getChestButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const result = await fetchInfo("exercises/chest");
  appendResults(result);
  console.log(result);
});

getBackButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const result = await fetchInfo("exercises/Back");
  appendResults(result);
  console.log(result);
});

getLegsButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const result = await fetchInfo("exercises/legs");
  appendResults(result);
  console.log(result);
});

clearFieldButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  clearResultsPanel();
});

// add an exercise to legs
getForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  addExercise("legs", getTextField.value);
  console.log(getTextField.value);
  getTextField.value = "";
});

async function addExercise(group, name) {
  await fetch(serverURL + `exercises/${group}/add/` + name, {
    method: "POST",
  });
  
}

// clears the result pane and adds new exercises;
function showNewResults(result) {
  clearResultsPanel();
  appendResults(result);
}

function appendResults(result) {
  const showedResults = document.createElement("p");
  showedResults.textContent = result;
  showedResults.classList.add("info");
  getResultArea.appendChild(showedResults);
}

function clearResultsPanel() {
  getResultArea.textContent = "";
}

// doesntButtonEl.addEventListener("click", async (e) => {
//   e.preventDefault();
//   try {
//     const data = await fetch(serverURL + "/nonExistantRoute");
//     if (!data.ok) {
//       console.log(`HTTP error! status: ${data.status}`)
//       return;
//     }
//     const result = await data.text();
//     console.log(result);
//   } catch (error){
//     console.log("had an error " + error.message);
//   }
// });