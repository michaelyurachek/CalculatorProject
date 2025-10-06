function toggleDropdown(selector) {
    const headers = [
        { id: "dropDown_header-1", text: "Simple Calculator", listId: "dropdown-1" },
        { id: "dropDown_header-2", text: "Button Calculator", listId: "dropdown-2" },
        { id: "dropDown_header-3", text: "Advanced Calculator", listId: "dropdown-3" },
        { id: "dropDown_header-4", text: "Button Calculator Plus", listId: "dropdown-4" }
    ];

    const arrowRight = "▷"; // right arrow
    const arrowDown  = "▼"; // down arrow

    if (selector >= 1 && selector <= headers.length) {
        headers.forEach((h, i) => {
            const headerEl = document.getElementById(h.id);
            const listEl = document.getElementById(h.listId);

            if (i === selector - 1) {
                // Toggle the selected list
                const isVisible = listEl.style.display === "block";
                listEl.style.display = isVisible ? "none" : "block";
                headerEl.innerHTML = `<span class="arrow">${isVisible ? arrowRight : arrowDown}</span> ${h.text}`;
            } else {
                // Collapse other lists
                listEl.style.display = "none";
                headerEl.innerHTML = `<span class="arrow">${arrowRight}</span> ${h.text}`;
            }
        });
    } else if (selector === 5) { // Collapse all
        headers.forEach(h => {
            const headerEl = document.getElementById(h.id);
            document.getElementById(h.listId).style.display = "none";
            headerEl.innerHTML = `<span class="arrow">${arrowRight}</span> ${h.text}`;
        });
    } else {
        console.error("Error: Invalid selector");
    }
}


document.addEventListener("click", function(event) {
    // IDs of headers and corresponding dropdowns
    const excludedIds = [
        "dropDown_header-1",
        "dropDown_header-2",
        "dropDown_header-3",
        "dropDown_header-4",
        "dropdown-1",
        "dropdown-2",
        "dropdown-3",
        "dropdown-4"
    ];

    // If the click is inside any excluded element, do nothing
    for (let id of excludedIds) {
        if (event.target.closest(`#${id}`)) {
            return; // Click was inside a dropdown/header, ignore
        }
    }

    // Click was outside all dropdowns → collapse all
    toggleDropdown(5);
});

// Copy Code Function
function copyCode(id) {
    const codeElement = document.getElementById(id);
    const text = codeElement.innerText.trim();
    const button = event.target; // button that was clicked

    navigator.clipboard.writeText(text).then(() => {
        // change button text to show success
        const original = button.innerText;
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = original;
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

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