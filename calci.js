let display = document.getElementById("display");
const x=(input)=>display.value += input;
const clearDisplay=()=>display.value = "";
const calculate=()=>display.value = eval(display.value);