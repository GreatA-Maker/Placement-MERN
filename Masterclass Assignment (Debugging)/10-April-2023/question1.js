//Question 1 -  if condition closing bracket was missing

let launch = false;
let Level = 17000;

if (Level >= 20000) {
	console.log("Fuel level cleared.");
	launch = true;
} else {
	console.log("WARNING: Insufficient fuel!");
	launch = false;
}
