// Run only after DOM fully loads
document.addEventListener("DOMContentLoaded", function () {


    const paletteContainer = document.getElementById("palette-container");
    const generateBtn = document.getElementById("generate-btn");
    const copiedMsg = document.querySelector(".copied-msg");

    const TOTAL_COLORS = 32;

    // Generate initial palette
    generatePalette(TOTAL_COLORS);

    // Generate new palette on button click
    generateBtn.addEventListener("click", function () {
        generatePalette(TOTAL_COLORS);
    });


    function generatePalette(size) {

        // Clear old colors
        paletteContainer.innerHTML = "";

        for (let i = 0; i < size; i++) {

            const color = generateRandomColor();

            const colorElement = document.createElement("div");
            colorElement.className = "color";
            colorElement.style.backgroundColor = color;
            const colorValue = document.createElement("span");
            colorValue.className = "color-value";
            colorValue.textContent = color;

            colorElement.appendChild(colorValue);
            paletteContainer.appendChild(colorElement);

            // Copy color on click
            colorElement.addEventListener("click", function () {

                navigator.clipboard.writeText(color);
                copiedMsg.style.opacity = "1";

                setTimeout(() => {
                    copiedMsg.style.opacity = "0";
                }, 1500);

            });
        }
    }

    // Function to generate random HEX color
    function generateRandomColor() {

        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

});