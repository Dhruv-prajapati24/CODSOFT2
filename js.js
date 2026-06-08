const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let value = this.innerText;

        // If Clear button is clicked
        if (value === "C") {
            display.value = "";
        }

        // If Equals button is clicked
        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "Error";
            }
        }

        // Otherwise append value
        else {
            display.value += value;
        }
    });
}