const button = document.getElementById("button");
let timesClicked = 0;
const h2 = document.getElementById("h2");

h2.textContent = `You Clicked ${timesClicked} Times.`;

button.addEventListener("click", function () {
  timesClicked = timesClicked + 1;
  h2.textContent = `You Clicked ${timesClicked} Times.`;
});
