document.addEventListener('DOMContentLoaded', () => {
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
            try { display.value = eval(display.value); } catch { display.value = 'Error'; }
        });
    }
    if (clearButton) {
        clearButton.addEventListener('click', () => display.value = '');
    }

    // --- Advanced Calculator ---
    const advInput = document.getElementById('advanced_input');
    const advButton = document.getElementById('advanced_calculate');
    const advResult = document.getElementById('advanced_result_display');

    if (advInput && advButton && advResult) {
        function evaluateExpression(expr) {
            try {
                expr = expr.replace(/\s+/g, '')
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(')
                    .replace(/log\(/g, 'Math.log10(')
                    .replace(/ln\(/g, 'Math.log(')
                    .replace(/sqrt\(/g, 'Math.sqrt(')
                    .replace(/pi/g, 'Math.PI')
                    .replace(/e/g, 'Math.E');
                return new Function(`"use strict"; return (${expr})`)();
            } catch { return 'Error'; }
        }

        advButton.addEventListener('click', () => {
            const result = evaluateExpression(advInput.value);
            advResult.textContent = `Result: ${result}`;
        });
    }
});
