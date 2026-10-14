const mainListEl = document.querySelector(".mainList")


console.log(mainListEl.value);

// get an item
mainListEl.addEventListener("click", (e) => {
  const item = e.target.closest(".element");
  if (item !== null) {
    console.log(item.textContent);
  }
});


// get a month
mainListEl.addEventListener("click", (e) => {
  const item = e.target.closest(".month");
  if (item !== null) {
    console.log(item.firstChild.textContent);
  }
});
