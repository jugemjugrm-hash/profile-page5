console.log("配線オッケー");
const countButton = document.querySelector("#count-button");
const countDisplay = document.querySelector("#count");

let count = 0;

countButton.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
    console.log(count)
});

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", function(){
    count = 0;
    countDisplay.textContent = count;
})