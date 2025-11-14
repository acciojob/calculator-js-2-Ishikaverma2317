const display = document.getElementById("display");

function addToDisplay(value) {
    display.textContent += value;
}

// Number buttons
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

// Backspace
document.getElementById("back").onclick = () => {
    display.textContent = display.textContent.slice(0, -1);
};

// Equal
document.getElementById("equal").onclick = () => {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
};
