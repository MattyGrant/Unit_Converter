/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('unit-value');
const btn = document.getElementById('convert-btn');
const volumeEl = document.getElementById('volume-el');
const lengthEl = document.getElementById('length-el');
const massEl = document.getElementById('mass-el');

function displayCalc() {
	let value = inputEl.value;
	let metLength = value * 3.281;
	let impLength = value / 3.281;
	let metVolume = value * 0.264;
	let impVolume = value / 0.264;
	let metMass = value * 2.204;
	let impMass = value / 2.204;
	lengthEl.textContent = `${value} meters = ${metLength.toFixed(
		3,
	)} feet | ${value} feet = ${impLength.toFixed(3)} meters`;
	volumeEl.textContent = `${value} liters = ${metVolume.toFixed(
		3,
	)} gallons | ${value} gallons = ${impVolume.toFixed(3)} liters`;
	massEl.textContent = `${value} kilograms = ${metMass.toFixed(
		3,
	)} pounds | ${value} pounds = ${impMass.toFixed(3)} kilograms`;
}

// When user clicks convert, generate:
btn.addEventListener('click', () => {
	displayCalc();
	inputEl.value = '';
});
