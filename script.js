// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");
window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let planetSelection = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planetSelection.name,
        planetSelection.diameter,
        planetSelection.star,
        planetSelection.distance,
        planetSelection.moons,
        planetSelection.image
      );

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
