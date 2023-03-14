// --> Variables
// Selecting the textarea for perform calculation
let screen = document.querySelector("#screen");

// Selecting All button of calculator
let btn = document.querySelectorAll(".btn");

// --> Loops
// loop for add event to button to check the innerText of buttons
for (item of btn) {
  // Event
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;

    // check for multiplication
    if (btnText == "×") {
      btnText = "*";
    }

    // check for division
    if (btnText == "÷") {
      btnText = "/";
    }
    screen.value += btnText;
  });
}

// --> Functions
// function for get sine
function sin() {
  screen.value = Math.sin(screen.value);
}

// function for get cosine
function cos() {
  screen.value = Math.cos(screen.value);
}

// function for get tangent
function tan() {
  screen.value = Math.tan(screen.value);
}

// function for get cotangent
function cot() {
  screen.value = Math.cot(screen.value);
}

// function for get logarithm
function log() {
  screen.value = Math.log(screen.value);
}

// function for get radical
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

// function for get pi (π)
function pi() {
  screen.value = 3.14159265359;
}

// function for backSpace textarea length
function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
