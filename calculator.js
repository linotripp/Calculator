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
