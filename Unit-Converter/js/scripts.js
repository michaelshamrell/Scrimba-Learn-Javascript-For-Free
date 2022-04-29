
//Meter to Feet Function
function meterToFeetCalculator() {
  meter = Number(document.getElementById("meterToFeetInput").value);
  let feet = 3.281;
  mtf = (meter * feet).toFixed(3);
  let mtfEl = document.getElementById("mtf-el");
  mtfEl.textContent = mtf;
}
//Feet to Meters Function
function feetToMeterCalculator() {
  feet = Number(document.getElementById("feetToMeterInput").value);
  let meter = .305;
  ftm = (feet * meter).toFixed(3);
  let ftmEl = document.getElementById("ftm-el");
  ftmEl.textContent = ftm;
}
//Liter to Gallon Function
function literToGallonCalculator() {
  liter = Number(document.getElementById("literToGallonInput").value);
  let gallon = 0.219969;
  ltg = (liter * gallon).toFixed(3);
  let ltgEl = document.getElementById("ltg-el");
  ltgEl.textContent = ltg;
}
//Liter to Gallon Function
function gallonToLiterCalculator() {
  gallon = Number(document.getElementById("gallonToLiterInput").value);
  let liter = 3.78541;
  gtl = (gallon * liter).toFixed(3);
  let gtlEl = document.getElementById("gtl-el");
  gtlEl.textContent = gtl;
}
//Kg to Pounds Function
function kgToPoundCalculator() {
  kg = Number(document.getElementById("kgToPoundInput").value);
  let pound = 2.20462;
  ktp = (kg * pound).toFixed(3);
  let ktpEl = document.getElementById("ktp-el");
  ktpEl.textContent = ktp;
}
//Pounds to Kg Function
function poundToKgCalculator() {
  pound = Number(document.getElementById("poundToKgInput").value);
  let kg = 0.453592;
  ptk = (pound * kg).toFixed(3);
  let ptkEl = document.getElementById("ptk-el");
  ptkEl.textContent = ptk;
}