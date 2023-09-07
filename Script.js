
        function convertToCelsius() {
            const fahrenheitInput = document.getElementById("fahrenheit");
            const celsiusInput = document.getElementById("celsius");
            const kelvinInput = document.getElementById("kelvin");
            const result = document.getElementById("result");

            const fahrenheitValue = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheitValue)) {
                const celsiusValue = (fahrenheitValue - 32) * 5/9;
                celsiusInput.value = celsiusValue.toFixed(2);
                result.innerHTML = `${fahrenheitValue.toFixed(2)}°F is ${celsiusValue.toFixed(2)}°C.`;
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
                fahrenheitInput.value = fahrenheitValue.toFixed(2);
                result.innerHTML = `${celsiusValue.toFixed(2)}°C is ${fahrenheitValue.toFixed(2)}°F.`;
            } else {
                result.innerHTML = "Please enter a valid Celsius temperature.";
            }
        }

        function convertToKelvin() {
            const celsiusInput = document.getElementById("celsius");
            const fahrenheitInput = document.getElementById("fahrenheit");
            const kelvinInput = document.getElementById("kelvin");
            const result = document.getElementById("result");
        
            const celsiusValue = parseFloat(celsiusInput.value);
            if (!isNaN(celsiusValue)) {
                const kelvinValue = celsiusValue + 273.15;
                kelvinInput.value = kelvinValue.toFixed(2);
                result.innerHTML = `${celsiusValue.toFixed(2)}°C is ${kelvinValue.toFixed(2)} K.`;
            } else {
                result.innerHTML = "Please enter a valid Celsius temperature.";
            }
        }
        
    