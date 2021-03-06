const currentLatitude = document.getElementById("current-latitude");
const currentLongitude = document.getElementById("current-longitude");
const currentAddressInput = document.getElementById("address-input");
const currentDefectInput = document.getElementById("defect-input");

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
    getAddress(currentLatLng);
    currentDefectInput.value = null;
    modalForm.style.display = "block";
  });
}
// // var coordsLat;
// // var coordsLng;
// let coords = [];

//Get coordinates from the API
function codeAddress(userAddress) {
  geocoder.geocode({ address: userAddress }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      //center the map over the result
      map.setCenter(results[0].geometry.location);
      //Display response in the console
      console.log(results);
      //Get latitude and longitude from the results
      currentLatitude.textContent = results[0].geometry.location.lat();
      currentLongitude.textContent = results[0].geometry.location.lng();
      currentLatLng = new google.maps.LatLng(
        results[0].geometry.location.lat(),
        results[0].geometry.location.lng()
      );
    } else {
      alert("Geocode error: " + status);
    }
  });
}

//Get street address after clicked the map
function getAddress(mapCoordinates) {
  geocoder.geocode({ location: mapCoordinates }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      //Display response in the console
      console.log(results[0].formatted_address);
      //Show address in address input field
      currentAddressInput.value = results[0].formatted_address;
    } else {
      alert("Geocode error: " + status);
    }
  });
}

// Get the form (pop up window)
var modalForm = document.getElementById("modal-form");

// Get the button that opens the form
var buttonOpenForm = document.getElementById("button-open-form");

// Get the button that closes the pop up window
var buttonCloseForm = document.getElementsByClassName("button-modal-close")[0];

//Get the address input and defect input fields
var userAddressInput = document.getElementById("address-input");
// var userDefectInput = document.getElementsById("defect-input");

// When the user clicks on the button, open the form in a pop up window
buttonOpenForm.onclick = function () {
  // currentLatitude.textContent = "";
  // currentLongitude.textContent = "";
  currentLatitude.textContent = "";
  currentLongitude.textContent = "";
  currentAddressInput.value = null;
  currentDefectInput.value = null;
  modalForm.style.display = "block";
};

//Upload pictures
var files = [];
document.getElementById("files").addEventListener("change", function (e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function (url) {
      console.log(url);
    })
    .catch(function (error) {
      console.log("error encountered");
    });
}

// document.getElementById("button-open-defects").onclick = () => {
//   queryFirebaseData();
// };

//When the address input field changes
userAddressInput.onchange = function () {
  //Get the value from the user in "address-input"
  userAddress = currentAddressInput.value;
  //Use codeAddrsss function to get the coordinates
  codeAddress(userAddress);
};

// userDefectInput.onchange = function () {
//   var userDefect = userDefectInput.value;
// };

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
  // Pop-up window open
  modalHelp.style.display = "block";
  modalHelp.addEventListener(
    "click",
    function (event) {
      // User clicks outside window -> close
      // "Closest" returns modal-content-ohje and all its child elements (e.g. modal-header)
      if (!event.target.closest(".modal-content-ohje")) {
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

// //Create a new marker and center
// function placeMarkerAndPanTo(latLng, map) {
//   new google.maps.Marker({
//     position: latLng,
//     map: map,
//   });
//   map.panTo(latLng);
// }

//Add a new marker
function addMarkerAndPanTo(latLng, markerAddress, map, message) {
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
  map.panTo(latLng);
}

//Add a new marker without pan
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

// //Check that all input fields are filled
// function checkAllRequiredFields() {
//   let addressField = currentAddressInput.value;
//   let defectField = currentDefectInput.value;
//   if (
//     (addressField == null || addressField == "",
//     defectField == null || defectField == "")
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }