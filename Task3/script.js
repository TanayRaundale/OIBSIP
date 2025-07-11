function convertTemperature() {
  const temp = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  if (isNaN(temp)) {
    result.textContent = "❌ Please enter a valid number!";
    return;
  }

  let c, f, k;
  if (unit === "celsius") {
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
    result.innerHTML = `🌡️ Fahrenheit: ${f.toFixed(2)} °F<br>🌡️ Kelvin: ${k.toFixed(2)} K`;
  } else if (unit === "fahrenheit") {
    c = (temp - 32) * 5/9;
    k = (temp - 32) * 5/9 + 273.15;
    result.innerHTML = `🌡️ Celsius: ${c.toFixed(2)} °C<br>🌡️ Kelvin: ${k.toFixed(2)} K`;
  } else if (unit === "kelvin") {
    c = temp - 273.15;
    f = (temp - 273.15) * 9/5 + 32;
    result.innerHTML = `🌡️ Celsius: ${c.toFixed(2)} °C<br>🌡️ Fahrenheit: ${f.toFixed(2)} °F`;
  }
}
