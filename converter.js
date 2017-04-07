function toCelsius (inp) {
	var toCels = (inp - 32) * 5 / 9;
	
	result.innerHTML = "<h2>" + toCels + "&degC</h2>";
}

function toFahrenheit (inp) {
	var toFahr = inp * 9 / 5 + 32;
	
	result.innerHTML = "<h2>" + toFahr + "&degF</h2>";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter"),
	cels = document.getElementById("cels"),
	fahr = document.getElementById("fahr"),
	temp = document.getElementById("temp"),
	result = document.getElementById("result");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if(cels.checked) {
		toFahrenheit(temp.value);
	}
	if(fahr.checked){
		toCelsius(temp.value);
	}
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);