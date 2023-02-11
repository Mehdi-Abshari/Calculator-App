// --> Varibales
// Selecting body
let body = document.querySelector("body"),
  // Selecting answer input
  answerInput = document.querySelector("#answerInput"),
  // Selecting all buttons in calculator
  allBtns = document.querySelectorAll(".buttons"),
  // Selecting delete all button
  deleteAllBtn = document.querySelectorAll(".delete-all"),
  // Selecting delete last button
  deleteLastBtn = document.querySelector("#delete-last"),
  // Selecting equal button in calculator
  equalBtn = document.querySelector("#equal"),
  // Selecting math operator buttons
  mathOperators = document.querySelectorAll(".math-operators"),
  // Selecting advanced calculation buttons
  advancedCalculation = document.querySelectorAll(".advanced-calculation");

// --> Events
// Delete last button ( <- )
deleteLastBtn.addEventListener("click", deleteLastInputvalue);

// --> Functions
function deleteLastInputvalue(e) {}
