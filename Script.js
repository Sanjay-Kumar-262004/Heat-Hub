function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const result = document.getElementById("result");

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        const kelvinValue = celsiusValue + 273.15;

        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);

        result.innerHTML = `${fahrenheitValue.toFixed(2)}°F is ${celsiusValue.toFixed(2)}°C and ${kelvinValue.toFixed(2)} K.`;
    } else {
        result.innerHTML = "Please enter a valid Fahrenheit temperature.";
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const result = document.getElementById("result");

    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        const kelvinValue = celsiusValue + 273.15;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);

        result.innerHTML = `${celsiusValue.toFixed(2)}°C is ${fahrenheitValue.toFixed(2)}°F and ${kelvinValue.toFixed(2)} K.`;
    } else {
        result.innerHTML = "Please enter a valid Celsius temperature.";
    }
}

function convertToKelvin() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const result = document.getElementById("result");

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        const kelvinValue = celsiusValue + 273.15;

        kelvinInput.value = kelvinValue.toFixed(2);
        celsiusInput.value = celsiusValue.toFixed(2);

        result.innerHTML = `${fahrenheitValue.toFixed(2)}°F is ${kelvinValue.toFixed(2)} K and ${celsiusValue.toFixed(2)}°C.`;
    } else {
        result.innerHTML = "Please enter a valid Fahrenheit temperature.";
    }
}
