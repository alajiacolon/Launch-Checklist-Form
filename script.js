// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       //pull input from the form
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let CargoMass = document.querySelector("input[name=cargoMass]");

       //Checks for empty fields
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""|| CargoMass.value === "") {
           alert("All fields are required!");
           // stop the form submission
           event.preventDefault();
       }
       //check for Numbers only
       var regex=/^[0-9]+$/; //regular expression for numbers only
       if (!fuelLevel.match(regex) || !CargoMass.match(regex))
       {
           alert("Fuel Level and Cargo Mass must input numbers");
           return false;
       }
       //Check for text only 
       if(typeof pilotName !== "string" || typeof(copilotName) !== "string"){
           alert("Text only ");
           return false;
       }
   });
});