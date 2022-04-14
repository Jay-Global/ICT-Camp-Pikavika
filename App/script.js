const currentLatitude = document.getElementById("current-latitude");
const currentLongitude = document.getElementById("current-longitude");

let userAddress;

//let userLatlng = { lat: 61.494, lng: 23.776 };

let currentLatLng;
let map;
let geocoder;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 61.494, lng: 23.776 },
    zoom: 14,
    //mapId: "MAP_ID"
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  queryFirebaseData();

  //Initialize geocoder
  geocoder = new google.maps.Geocoder();

  // When the user clicks (anywhere) on the map, open the form in a pop up window
  map.addListener("click", (e) => {
    currentLatLng = e.latLng;
    currentLatitude.textContent = currentLatLng.lat();
    currentLongitude.textContent = currentLatLng.lng();
    modalForm.style.display = "block";
  });
}

//Get coordinates from the API
function codeAddress(userAddress) {
  geocoder.geocode({ userAddress: userAddress }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      //center the map over the result
      map.setCenter(results[0].geometry.location);
      //Display response in the console
      console.log(results);
      //place a marker at the location
      // var marker = new google.maps.Marker({
      //   map: map,
      //   position: results[0].geometry.location,
      // });
    } else {
      alert("Geocode error: " + status);
    }
  });
}

// userAddress = document.getElementById("address-input").value;
// codeAddress(userAddress);

// Get the form (pop up window)
var modalForm = document.getElementById("modal-form");

// Get the button that opens the form
var buttonOpenForm = document.getElementById("button-open-form");

// Get the button that closes the pop up window
var buttonCloseForm = document.getElementsByClassName("button-modal-close")[0];

//Get the address input field
var userAddressInput = document.getElementById("address-input");

// When the user clicks on the button, open the form in a pop up window
buttonOpenForm.onclick = function () {
  // currentLatitude.textContent = "";
  // currentLongitude.textContent = "";
  modalForm.style.display = "block";
};

// document.getElementById("button-open-defects").onclick = () => {
//   queryFirebaseData();
// };

userAddressInput.onchange = function () {
  userAddress = document.getElementById("address-input").value;
  codeAddress(userAddress);
};

// When the user clicks on (x) button, close the pop up window
buttonCloseForm.onclick = function () {
  modalForm.style.display = "none";
};

// Get the "thank you" pop up window
var modalThankYou = document.getElementById("modal-thank-you");

// Get the button that opens the "thank you" pop up window
// KOKEILU var buttonSend = document.getElementById("button-send");

// Get the button that closes the pop up window
var buttonCloseThankYou =
  document.getElementsByClassName("button-modal-close")[1];

// When the user clicks on the "send" button, open the thank you window
// KOKEILU
/*
buttonSend.onclick = function () {
  modalForm.style.display = "none";
  modalThankYou.style.display = "block";
  placeMarkerAndPanTo(currentLatLng, map);
};*/

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
  //pop-up window open
  modalHelp.style.display = "block";
  modalHelp.addEventListener(
    "click",
    function (event) {
      //user clicks outside window -> close
      if (!event.target.closest("modal-help")) {
        modalHelp.style.display = "none";
      }
    },
    false
  );
};

// When the user clicks on (x), close the pop up window
buttonCloseHelp.onclick = function () {
  modalHelp.style.display = "none";
};

//Create a new marker and center
function placeMarkerAndPanTo(latLng, map) {
  new google.maps.Marker({
    position: latLng,
    map: map,
  });
  map.panTo(latLng);
}

function addMarkerAndInfoWindow(latLng, markerAddress, map, message) {
  //Create a new marker
  var marker = new google.maps.Marker({
    position: latLng,
    title: markerAddress,
    map: map,
  });
  //Create a info window attached to the marker
  var infoWindow = new google.maps.InfoWindow({
    content: message,
  });
  //When user clicks the marker info window will open
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map, marker);
  });
}
