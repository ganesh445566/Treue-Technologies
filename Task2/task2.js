document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const lengthInput = document.getElementById("lengthInput");
    const unitSelect = document.getElementById("unitSelect");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const lengthInMeters = parseFloat(lengthInput.value);
        const selectedUnit = unitSelect.value;

        if (!isNaN(lengthInMeters)) {
            let convertedLength;
            switch (selectedUnit) {
                case "cm":
                    convertedLength = lengthInMeters * 100;
                    break;
                case "km":
                    convertedLength = lengthInMeters / 1000;
                    break;
                case "mm":
                    convertedLength = lengthInMeters * 1000;
                    break;
                default:
                    convertedLength = "Invalid unit";
            }

            resultElement.textContent = `${lengthInMeters} meters is ${convertedLength} ${selectedUnit}`;
        } else {
            resultElement.textContent = "Please enter a valid length in meters.";
        }
    });
});
