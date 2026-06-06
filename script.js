const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const themeToggle = document.getElementById("themeToggle");

function appendValue(value) {
  display.value += value;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    const result = eval(expression);

    const item = document.createElement("li");
    item.textContent = `${expression} = ${result}`;

    historyList.prepend(item);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    display.value += e.key;
  }

  if (e.key === "Enter") {
    calculate();
  }

  if (e.key === "Backspace") {
    deleteLast();
  }

  if (e.key === "Escape") {
    clearDisplay();
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙";
});
