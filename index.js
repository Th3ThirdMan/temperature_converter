// script.js
const celsiusElem = document.querySelector("#fahrenheit");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToFahrenheit();
});

function convertToFahrenheit() {
  let inputValue = degree.value;

  if (tempType.value === "celsius") {
    const CelsiusToFahrenheit = inputValue * 1.8 + 32;
    celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(1)} &deg;f`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;f`;
  }
}
