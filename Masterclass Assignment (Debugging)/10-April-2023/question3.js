//Question 3 -  the variable name was incorrect .. it should be "fuelLevel" as declared in camelCase Format

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
	console.log("Fuel level cleared.");
	launchReady = true;
} else {
	console.log("WARNING: Insufficient fuel!");
	launchReady = false;
}
