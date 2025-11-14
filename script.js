const display = document.getElementById("display");

function addToDisplay(value) {
    display.textContent += value;
}

// Number buttons 0–9
for (let i = 0; i <= 9; i++) {
    document.getElementById(String(i)).onclick = () => addToDisplay(i);
}

// Operators
document.getElementById("plus").onclick = () => addToDisplay("+");
document.getElementById("-").onclick = () => addToDisplay("-");
document.getElementById("divi").onclick = () => addToDisplay("/");
document.getElementById("*").onclick = () => addToDisplay("*");

// Brackets
document.getElementById("op").onclick = () => addToDisplay("(");
document.getElementById("cl").onclick = () => addToDisplay(")");

// Dot
document.getElementById("dot").onclick = () => addToDisplay(".");

// Clear All
document.getElementById("C").onclick = () => display.textContent = "";

// Backspace (one character delete)
document.getElementById("back").onclick = () => {
    display.textContent = display.textContent.slice(0, -1);
};

// Equal
document.getElementById("equal").onclick = () => {
    try {
        let result = eval(display.textContent);

        // Important fix for test case:
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.textContent = "Error";
        } else {
            display.textContent = result;
        }

    } catch (e) {
        display.textContent = "Error";
    }
};
