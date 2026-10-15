const worksButtonEl = document.querySelector(".working");
const doesntButtonEl = document.querySelector(".doesnt");
const exercisesButtonEl = document.querySelector(".exercises");
const getChestButtonEl = document.querySelector(".getChest");
const getBackButtonEl = document.querySelector(".getBack");
const serverURL = "http://127.0.0.1:3000";

worksButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetch(serverURL + "/info");
  const result = await data.text();
  console.log(result);
});

exercisesButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetch(serverURL + "/exercises");
  const result = await data.json();
  console.log(result);
});

getChestButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetch(serverURL + "/exercises/chest");
  const result = await data.json();
  console.log(result);
});

getBackButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetch(serverURL + "/exercises/back");
  const result = await data.json();
  console.log(result);
});

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