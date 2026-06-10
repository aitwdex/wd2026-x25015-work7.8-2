import { changeBgColor, toggleTextSize } from './styleHelper.js';

document.getElementById("bgBtn").addEventListener("click", () => {
    changeBgColor("lightblue");
});

document.getElementById("fontBtn").addEventListener("click", () => {
    toggleTextSize();
});