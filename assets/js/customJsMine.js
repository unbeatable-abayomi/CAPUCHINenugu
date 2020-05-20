const twoSittings = document.getElementById("two-Sittings");
const oneSitting = document.getElementById("one-Sitting");
const remove = document.getElementById("clear");
const twoSittingSpan = document.querySelector(".twoSittingSpan");
const oneSittingSpan = document.querySelector(".oneSittingSpan");
const messageAboutOne = document.querySelector(".messageAboutOne");
const messageAboutTwo = document.querySelector(".messageAboutTwo");

// console.log(twoSittings);
// console.log(remove);

oneSittingSpan.addEventListener("click", displayNoneToOneSittings);

twoSittingSpan.addEventListener("click", displayNoneAndBlock);


function displayNoneAndBlock() {
    twoSittings.style.display = "flex";
    oneSitting.style.display = "none";
  messageAboutOne.style.display = "block";
  messageAboutTwo.style.display = "none";
}

function displayNoneToOneSittings() {
  oneSitting.style.display = "flex";
    messageAboutOne.style.display = "none";
  twoSittings.style.display = "none";
    messageAboutTwo.style.display = "block";
}

