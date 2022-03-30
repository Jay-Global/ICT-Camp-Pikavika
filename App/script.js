function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 61.494, lng: 23.776 },
    zoom: 14,
    //mapId: "MAP_ID"
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  // When the user clicks (anywhere) on the map, open the form in a pop up window
  map.addListener("click", () => {
    modalForm.style.display = "block";
  });
}

// Get the form (pop up window)
var modalForm = document.getElementById("modal-form");

// Get the button that opens the form
var buttonOpenForm = document.getElementById("button-open-form");

// Get the button that closes the pop up window
var buttonCloseForm = document.getElementsByClassName("button-modal-close")[0];

// When the user clicks on the button, open the form in a pop up window
buttonOpenForm.onclick = function () {
  modalForm.style.display = "block";
};

// When the user clicks on (x) button, close the pop up window
buttonCloseForm.onclick = function () {
  modalForm.style.display = "none";
};

// Get the "thank you" pop up window
var modalThankYou = document.getElementById("modal-thank-you");

// Get the button that opens the "thank you" pop up window
var buttonSend = document.getElementById("button-send");

// Get the button that closes the pop up window
var buttonCloseThankYou =
  document.getElementsByClassName("button-modal-close")[1];

// When the user clicks on the "send" button, open the thank you window
buttonSend.onclick = function () {
  modalForm.style.display = "none";
  modalThankYou.style.display = "block";
};

// When the user clicks on (x), close the pop up window
buttonCloseThankYou.onclick = function () {
  modalThankYou.style.display = "none";
};

// Get the help pop up window
var modalHelp = document.getElementById("modal-help");

// Get the button that opens the insert defect pop up window
var buttonOpenHelp = document.getElementById("button-open-help");

// Get the <span> element that closes the pop up window
var buttonCloseHelp = document.getElementsByClassName("button-modal-close")[2];

// When the user clicks on the button, open the help pop up window
buttonOpenHelp.onclick = function () {
  modalHelp.style.display = "block";
};

// When the user clicks on <span> (x), close the pop up window
buttonCloseHelp.onclick = function () {
  modalHelp.style.display = "none";
};

/*   map.addListener("click", (e) => {
      placeMarkerAndPanTo(e.latLng, map);
    }); */

/* function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  } */

/* Add a marker
  new google.maps.Marker({
    position: { lat: 61.494, lng: 23.776 },
    map,
    title: "Tampere",
  });
  
  //let mouseLocation;
  
  //map.addListener(map, "click", function (event) {
  //  mouseLocation = event.latLng;
  //});
  
  //console.log(mouseLocation);

  /* // When the user clicks anywhere outside of the pop up window, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalDefect.style.display = "none";
  }
};
  
  */
