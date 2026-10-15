const worksButtonEl = document.querySelector(".working");
const doesntButtonEl = document.querySelector(".doesnt");
const serverURL = "http://127.0.0.1:3000";

worksButtonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetch(serverURL + "/info");
  const result = await data.text();
  console.log(result);
});