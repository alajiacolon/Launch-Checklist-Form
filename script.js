// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   //Fetching Planetary Data
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
      response.json().then(function(json){
         let target = document.getElementById("missionTarget");
         target.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter} </li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth:${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">
   
   `
   });
});
   form.addEventListener("submit", function(event) {
      
       //pull input from the form
       event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]");
       let pilot = pilotName.value;
       let pilotTest = Number(pilot);

       let copilotName = document.querySelector("input[name=copilotName]");
       let copilot = copilotName.value;
       let copilotTest = Number(copilot);

       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let CargoMass = document.querySelector("input[name=cargoMass]");

       //Checks for empty fields
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""|| CargoMass.value === "") {
           alert("All fields are required!");
           // stop the form submission
       }
       //check for Numbers only
       var regex=/^[0-9]+$/; //regular expression for numbers only
       /*if (!fuelLevel.match(regex) || !CargoMass.match(regex))
       {
           alert("Fuel Level and Cargo Mass must input numbers");
           //return false;
       }*/

       //Check for text only 
       if(isNaN(pilotTest)===false ||isNaN(copilotTest)===false){
           alert("Text only ");
           //return false;
       }

       let faultyItems = document.getElementById("faultyItems");
       let launchStatus = document.getElementById("launchStatus")

       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");

       if (fuelLevel.value < 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";

         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel Status is too low for launch."
       }else if (CargoMass.value > 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";

         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo Mass too high for launch."
       }else{
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
       }
   });
});