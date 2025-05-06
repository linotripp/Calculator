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

  const isNumber = /^[0-9]$/.test(e.key);
  const isControl = ["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(
    e.key
  );
  const operatorPattern = /^[\^\/\*\-\+\(\)\.]$/;

  const isOperator = operatorPattern.test(e.key);
  const lastWasOperator = operatorPattern.test(lastChar);

  if (isOperator && lastWasOperator) {
    e.preventDefault();
    myTextArea.value = myTextArea.value.slice(0, -1) + e.key;
  } else if (isNumber || isControl || isOperator) {
    return;
  } else {
    e.preventDefault();
  }
});
