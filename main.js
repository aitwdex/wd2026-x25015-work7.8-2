import { codeToText } from "./sub.js";

document.getElementById("getBtn").addEventListener("click", () => {
  getWeather();
});

async function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.6439&longitude=139.6692&current_weather=true";
  const response = await fetch(url);
  const data = await response.json();

  const temp = data.current_weather.temperature;
  const code = data.current_weather.weathercode;

  // 自作ライブラリで数字→日本語に変換
  const weather = codeToText(code);

  document.getElementById("temp").textContent =
    `${weather} / 気温${temp}℃`;
}