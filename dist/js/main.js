"use strict";
const inputTempK = document.querySelector("#tempK");
const inputTempC = document.querySelector("#tempC");
const inputTempF = document.querySelector("#tempF");
inputTempK.onkeydown = convertFromK;
inputTempC.onkeydown = convertFromC;
inputTempF.onkeydown = convertFromF;
function convertFromK() {
    let tempK = Number(inputTempK.value);
    if (tempK < 0) {
        tempK = 0;
    }
    const tempC = tempK - 273.15;
    const tempF = ((tempK - 273.15) * 9 + 160) / 5;
    inputTempC.value = tempC.toFixed(1);
    inputTempF.value = tempF.toFixed(1);
}
function convertFromC() {
    let tempC = Number(inputTempC.value);
    if (tempC < -273.15) {
        tempC = -273.15;
    }
    const tempK = tempC + 273.15;
    const tempF = (9 * tempC + 160) / 5;
    inputTempK.value = tempK.toFixed(2);
    inputTempF.value = tempF.toFixed(1);
}
function convertFromF() {
    const tempF = Number(inputTempF.value);
    const tempC = (tempF * 5 - 160) / 9;
    const tempK = tempC + 273.15;
    inputTempK.value = tempK.toFixed(2);
    inputTempC.value = tempC.toFixed(1);
}
