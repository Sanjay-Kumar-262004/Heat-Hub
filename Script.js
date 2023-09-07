document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertBtn = document.getElementById("convert-btn");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (!isNaN(temperature)) {
            if (unit === "celsius") {
                const fahrenheit = (temperature * 9/5) + 32;
                const kelvin = temperature + 273.15;
                resultDiv.innerHTML = `${temperature.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)} K.`;
            } else if (unit === "fahrenheit") {
                const celsius = (temperature - 32) * 5/9;
                const kelvin = celsius + 273.15;
                resultDiv.innerHTML = `${temperature.toFixed(2)}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)} K.`;
            } else if (unit === "kelvin") {
                const celsius = temperature - 273.15;
                const fahrenheit = (celsius * 9/5) + 32;
                resultDiv.innerHTML = `${temperature.toFixed(2)} K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
            }
        } else {
            resultDiv.innerHTML = "Please enter a valid temperature value.";
        }
    });
});
