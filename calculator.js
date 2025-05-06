const myTextArea = document.getElementById("box");

function addInput(button) {
  myTextArea.value += button.value;
}

function clearEntry() {
  myTextArea.value = myTextArea.value.substring(0, myTextArea.value.length - 1);
}

function allClear() {
  myTextArea.value = "";
}

function calculate() {
  const sanitized = myTextArea.value.replace(/\^/g, "**");
  myTextArea.value = eval(sanitized);
}

myTextArea.addEventListener("keydown", (e) => {
  const lastChar = myTextArea.value.slice(-1);

  const numbersPlus = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "(",
    ")",
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
  ];

  const operators = [".", "+", "-", "*", "/"];

  const allAllowed = [...numbersPlus, ...operators];

  const isOperator = operators.includes(e.key);
  const lastWasOperator = operators.includes(lastChar);

  // Handle double operators
  if (isOperator && lastWasOperator) {
    if (e.key === lastChar) {
      // block same operator
      e.preventDefault();
      return;
    } else {
      // replace last operator with new one
      e.preventDefault();
      myTextArea.value = myTextArea.value.slice(0, -1) + e.key;
      return;
    }
  }

  // Allow all other keys in the allowed list
  if (allAllowed.includes(e.key)) return;

  // Block everything else
  e.preventDefault();
});
