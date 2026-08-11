let convertBtn = document.getElementById("convertButton")
let inputValue = document.getElementById("inputValue")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(event) {
    event.preventDefault() /// stop refresh

    lengthEl.innerText = inputValue.value + " meters = " + (Number(inputValue.value)*3.281).toFixed(3) + " feet | " + inputValue.value + " feet = " + (Number(inputValue.value)/3.281).toFixed(3) + " meters"
    volumeEl.innerText = inputValue.value + " liters = " + (Number(inputValue.value)*0.264).toFixed(3) + " gallons | " + inputValue.value + " gallons = " + (Number(inputValue.value)/0.264).toFixed(3) + " liters"
    massEl.innerText = inputValue.value + " kilos = " + (Number(inputValue.value)*2.204).toFixed(3) + " pounds | " + inputValue.value + " pounds = " + (Number(inputValue.value)/2.204).toFixed(3) + " kilos"
})
