document.getElementById("equal").onclick = () => {
    try {
        let result = eval(display.textContent);

        // FIX: handle division by zero
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.textContent = "Error";
        } else {
            display.textContent = result;
        }

    } catch {
        display.textContent = "Error";
    }
};
