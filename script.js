// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json) {
         let indexNum = Math.floor(Math.random()*7);
         let missionTarget= document.getElementById("missionTarget");
         missionTarget.innerHTML=`
         <h2>Mission Destination</h2>
         <ul>
            <li>Name: ${json[indexNum].name}</li>
            <li>Diameter: ${json[indexNum].diameter}</li>
            <li>Star: ${json[indexNum].star}</li>
            <li>Distance: ${json[indexNum].distance}</li>
            <li>Moons: ${json[indexNum].moons}</li>
            <img style="width: 350px; height: 350px;" src="${json[indexNum].image}">
            
     </ul>
     `;
      });
   })
   let form= this.document.getElementById ("launchForm");

   form.addEventListener("submit", function(event){
      event.preventDefault()
   
      let pilotName= document.querySelector("input[name=pilotName]");
      let copilotName= document.querySelector("input[name=copilotName]");
      let fuelLevel= document.querySelector("input[name=fuelLevel]");
      let cargoMass= document.querySelector("input[name=cargoMass]");

      console.log(pilotName.value);
      console.log(copilotName.value);
      console.log(fuelLevel.value);
      console.log(cargoMass.value);

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ){
         window.alert("All Fields Required!");
      }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         window.alert("Invalid Numerical Value Entered");
      }else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         window.alert("Invalid Alphabetical Value Entered");
      }else {
         let pilotStatus = document.getElementById("pilotStatus");
            pilotStatus.style.visibility= "visible"
            pilotStatus.innerHTML= `Pilot ${pilotName.value} is ready for launch.`
         let copilotStatus = document.getElementById("copilotStatus");
            copilotStatus.style.visibility= "visible"
            copilotStatus.innerHTML=`Copilot ${copilotName.value} is ready for launch.`
         let fuelStatus= document.getElementById("fuelStatus");
             fuelStatus.style.visibility= "visible"
             fuelStatus.innerHTML= `Fuel level check passed.`
         let launchStatus= document.getElementById("launchStatus")
             launchStatus.style.visibility= "visible"
             launchStatus.style.color= "green"
             launchStatus.innerHTML= "Shuttle is ready for launch."
         let cargoStatus= document.getElementById("cargoStatus")
             cargoStatus.style.visibility= "visible"
             cargoStatus.innerHTML= `Cargo mass check passed.`

         
             if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
               launchStatus.style.color = "red";
               launchStatus.innerHTML = "Shuttle is not ready for launch"
                   if (fuelLevel.value < 10000) {
                   fuelStatus.innerHTML = "Fuel level is too low to fly";
                   }else if (cargoMass.value > 10000){
                   cargoStatus.innerHTML = "Cargo mass too heavy to fly";
                   }
            }
      };
   });

});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/