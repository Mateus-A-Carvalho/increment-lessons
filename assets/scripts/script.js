const incrementBtn = document.querySelector("#count-btn");
const countDisplay = document.querySelector("#count-display");
let count = 0;

// Clicking on button and incrementing count
function incrementBtnClick() {
  incrementBtn.addEventListener("click", () => {
    count = count + 1;
    return countDisplay.innerHTML = count; 
  })
}

incrementBtnClick()


