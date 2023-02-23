// --> Varibales
// Selecting body
let body = document.querySelector("body"),
  // Selecting answer input
  answerInput = document.querySelector("#answerInput"),
  // Selecting all buttons in calculator
  allBtns = document.querySelectorAll(".buttons"),
  // Selecting delete all button
  deleteAllBtn = document.querySelector(".delete-all"),
  // Selecting delete last button
  deleteLastBtn = document.querySelector("#delete-last"),
  // Selecting all numbers in calculator
  numbers = document.querySelectorAll(".numbers"),
  // Selecting equal button in calculator
  equalBtn = document.querySelector("#equal"),
  // Selecting math operator buttons
  mathOperators = document.querySelectorAll(".math-operators"),
  // Selecting advanced calculation buttons
  advancedCalculation = document.querySelectorAll(".advanced-calculation"),
  // Selecting separators numbers
  numberSeparators = document.querySelectorAll(".number-separators");

// --> Events
// Delete delete All Button
deleteAllBtn.addEventListener("click", () => {
  deleteAllBtnValue("");
});
// Delete last button ( <- )
deleteLastBtn.addEventListener("click", deleteLastInputValue);
// equal Button (=)
equalBtn.addEventListener("click", accountAnswer);

// --> Functions
// Function for when click at numbers button
function chooseNumber() {
  // Normal numbers
  numbers.forEach((item) => {
    item.addEventListener("click", () => {
      addToDisplay(item.textContent);
      count = 0;
    });
  });
  // '(' , ')' , '.' numbers
  numberSeparators.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.textContent == "(" || item.textContent == ")") {
        addToDisplay(item.textContent);
      } else if (
        count < 1 &&
        item.textContent == "." &&
        answerInput.value != ""
      ) {
        addToDisplay(item.textContent);
        count++;
      }
    });
  });
}

// Function for chose data value of math operators
function chooseOperator() {
  mathOperators.forEach((item) => {
    item.addEventListener("click", () => {
      if (
        count < 1 &&
        answerInput.value != "" &&
        item.getAttribute("data-value") != "-"
      ) {
        addToDisplay(item.getAttribute("data-value"));
        count++;
      } else if (count < 1 && item.getAttribute("data-value") == "-") {
        addToDisplay(item.textContent);
        count++;
      }
    });
  });
}

// Function for adds the argument to answerInput.value + any thing that was already in the textarea
function addToDisplay(button) {
  answerInput.value += button;
}

// Function for adds the argument to answerInput.value
function deleteAllBtnValue(name) {
  answerInput.value = name;
}

// Function for slice answerInput in deleteAllBtnValue
function deleteLastInputValue() {
  deleteAllBtnValue(answerInput.value.slice(0, -1));
}

