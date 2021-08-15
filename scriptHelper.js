// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const addDest = document.getElementById("missionTarget");
  addDest.innerHTML = `
     <h2>Mission Destination</h2>
     <ol>
       <li>Name: ${name} </li>
       <li>Diameter:${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons:${moons} </li>
     </ol>
     <img src="${imageUrl}">
     `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === Number) {
    return "Is a Number";
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const faultyItems = document.getElementById("faultyItems");
  const launchStatus = document.getElementById("launchStatus");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");

  const form = document.qetElementById("launchForm");
  form.addEventListener("submit", function (event) {
    list = "hi";
    console.log(list);
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoMass]");

    if (pilot.value === "" || copilot.value === "") {
      alert("All fields are required!");
      // stop the form submission
      event.preventDefault();
    }

    if (fuelLevel < 10000 || cargoLevel > 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      pilotStatus.innerHTML = `${pilot} is ready for launch`;
      copilotStatus.innerHTML = `${copilot} is ready for launch`;
      fuelStatus.innerHTML = `fuel level too low for launch`;
      cargoStatus.innerHTML = `cargo mass low enough for launch`;
    }
    if (fuelLevel > 10000 || cargoLevel < 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle ready for launch";
      launchStatus.style.color = "green";
      pilotStatus.innerHTML = `${pilot} is ready for launch`;
      copilotStatus.innerHTML = `${copilot} is ready for launch`;
    }
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let num = Math.floor(Math.random() * planets.length);
  return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
