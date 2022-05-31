window.addEventListener("DOMContentLoaded", function (e) { //waits for the page to load and then runs

  let locationBox = document.querySelector("#location"); //sets a primary value for location
  let location = {
    latitude: "unknown",
    longitude: "unknown"
  };

  window.navigator.geolocation.getCurrentPosition(
    function (position) {

      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      locationBox.value = JSON.stringify(location);
    },
    function (error) { //runs if getting the user's location fails
      locationBox.value = JSON.stringify(location);
    });

  let request = localStorage.getItem("request");
  if (request) {
    const docRequest = JSON.parse(request);

    const requestInput = document.querySelector("#doc-request");
    requestInput.value = Request;

    const part = document.querySelector(".part");

    const title = part.querySelector(".title");
    const timeStamp = part.querySelector(".timeStamp");
    const desc = part.querySelector(".desc");

    title.innerText = docRequest.title;
    timeStamp.innerText = docRequest.timeStamp;
    desc.innerText = docRequest.desc;

    const img = part.querySelector("img");
    img.setAttribute("src", `images/${docRequest.id}.png`);
    img.setAttribute("alt", docRequest.title);


  }
});