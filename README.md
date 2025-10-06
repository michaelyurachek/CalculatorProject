# 🧮 How to Calculate
### by Michael Yurachek

Step-by-step guide to creating a calculator using **HTML** and **JavaScript**.  
Learn by example with live code and explanations.

---

## 📋 What You'll Learn

- How to create a simple calculator that evaluates basic arithmetic expressions.
- How to build a button-based calculator with a user-friendly interface.
- How to implement advanced mathematical functions like trigonometry and logarithms.
- How to enhance your calculator with additional features and improved UI/UX.

---

## 🧠 Simple Calculator

The **Simple Calculator** is the most basic example of a calculator you can build with JavaScript.  
It allows users to type in arithmetic expressions such as `2 + 2` or `(5 * 3) - 4` and instantly see the result.

Behind the scenes, the calculator takes the user’s input as a string and uses JavaScript’s built-in `eval()` function to evaluate the expression.  
While `eval()` is not recommended for production applications due to security risks, it’s fine here for demonstration.

This example lays the foundation for more advanced calculators by showing how to connect an input field, a button, and JavaScript logic.

### 💻 HTML

```html
<div class="input_equation_module">
  <input type="text" id="equation_input" placeholder="Example: 2 + 2">
  <button class="calculate_button" id="simpleCalculate_button">Calculate</button>
  <div id="result_display">Result: </div>
</div>
````

### ⚙️ JavaScript

```javascript
// --- Simple Calculator ---
const simpleButton = document.getElementById('simpleCalculate_button');
if (simpleButton) {
  simpleButton.addEventListener('click', () => {
    const eq = document.getElementById('equation_input').value;
    try {
      document.getElementById('result_display').innerText = 'Result: ' + eval(eq);
    } catch {
      document.getElementById('result_display').innerText = 'Error';
    }
  });
}
```

---

## 🔢 Button Calculator

The **Button Calculator** builds upon the Simple Calculator by providing a graphical interface with buttons for digits and operators.

Users can click buttons to input numbers and operators.
Event listeners handle button clicks to update the input value and calculate the result using `eval()`.

### 💻 HTML

```html
<div class="button_click_module">
  <div class="calculator">
    <input type="text" id="button_display" disabled>
    <div class="buttons">
      <button class="btn" data-value="7">7</button>
      <button class="btn" data-value="8">8</button>
      <button class="btn" data-value="9">9</button>
      <button class="btn" data-value="/">/</button>

      <button class="btn" data-value="4">4</button>
      <button class="btn" data-value="5">5</button>
      <button class="btn" data-value="6">6</button>
      <button class="btn" data-value="*">*</button>

      <button class="btn" data-value="1">1</button>
      <button class="btn" data-value="2">2</button>
      <button class="btn" data-value="3">3</button>
      <button class="btn" data-value="-">-</button>

      <button class="btn" data-value="0">0</button>
      <button class="btn" data-value=".">.</button>
      <button class="btn" id="equals_button">=</button>
      <button class="btn" data-value="+">+</button>

      <button class="btn" id="clear_button">C</button>
    </div>
  </div>
</div>
```

### ⚙️ JavaScript

```javascript
// --- Button Click Calculator ---
const display = document.getElementById('button_display');
const buttons = document.querySelectorAll('.btn');
const equalsButton = document.getElementById('equals_button');
const clearButton = document.getElementById('clear_button');

if (display && buttons.length) {
  buttons.forEach(btn => {
    const value = btn.getAttribute('data-value');
    if (value) btn.addEventListener('click', () => display.value += value);
  });
}

if (equalsButton) {
  equalsButton.addEventListener('click', () => {
    try { display.value = eval(display.value); }
    catch { display.value = 'Error'; }
  });
}

if (clearButton) {
  clearButton.addEventListener('click', () => display.value = '');
}
```

---

## 🧮 Advanced Calculator

The **Advanced Calculator** expands on the Button Calculator by adding support for trigonometric and logarithmic functions, exponentiation, and parentheses.

It replaces function names with JavaScript’s `Math` methods before evaluating expressions.
This makes it more powerful while still demonstrating how to parse and process user input.

### 💻 HTML

```html
<div class="advanced_equations_module">
  <input type="text" id="advanced_input" placeholder="Example: sin(30) + log(10)">
  <button class="calculate_button" id="advanced_calculate">Calculate</button>
  <div id="advanced_result_display">Result: </div>
</div>
```

### ⚙️ JavaScript

```javascript
// --- Advanced Calculator ---
function advancedEval(expr) {
  expr = expr.replace(/sin/g, 'Math.sin')
             .replace(/cos/g, 'Math.cos')
             .replace(/tan/g, 'Math.tan')
             .replace(/log/g, 'Math.log')
             .replace(/sqrt/g, 'Math.sqrt')
             .replace(/\^/g, '**'); // Replace ^ with ** for exponentiation
  return eval(expr);
}

const advancedButton = document.getElementById('advanced_calculate');
if (advancedButton) {
  advancedButton.addEventListener('click', () => {
    const eq = document.getElementById('advanced_input').value;
    try {
      document.getElementById('advanced_result_display').innerText =
        'Result: ' + advancedEval(eq);
    } catch {
      document.getElementById('advanced_result_display').innerText = 'Error';
    }
  });
}
```

---

## ✅ Summary

In this guide, we explored three calculators:

1. **Simple Calculator** — evaluates arithmetic expressions.
2. **Button Calculator** — adds clickable inputs and an interactive layout.
3. **Advanced Calculator** — introduces trigonometry, logarithms, and exponentiation.

Each example demonstrated core web development concepts like **DOM manipulation**, **event handling**, and **expression evaluation**.

This progression shows how to build from basic functionality to more powerful and user-friendly applications.