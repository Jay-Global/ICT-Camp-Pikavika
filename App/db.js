const firebaseConfig = {
  apiKey: "AIzaSyAhAYRZLhw3K6-HhAAVk_P25nk0q7fBmFk",
  authDomain: "pikavika-55975.firebaseapp.com",
  projectId: "pikavika-55975",
  databaseURL:
    "https://pikavika-55975-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "pikavika-55975.appspot.com",
  messagingSenderId: "104622649171",
  appId: "1:104622649171:web:83056c03e7b8b879f9bba6",
};

firebase.initializeApp(firebaseConfig);

// let lat, long
let address, value, email;

// function sendData() {
document.getElementById("button-send").onclick = () => {
  // this.lat = document.getElementById("current-latitude").value;
  // this.long = document.getElementById("current-longitude").value;
  address = document.getElementById("address-input").value;
  value = document.getElementById("defect-input").value;
  email = document.getElementById("email-input").value;

  firebase
    .database()
    .ref("viat/" + address)
    .set({
      // Lat: lat,
      // Long: long,
      Osoite: address,
      Vika: value,
      Sposti: email,
    });
  // .then(() => {
  //   console.log("Data tallennettu onnistuneesti!");
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // };
  modalForm.style.display = "none";
  modalThankYou.style.display = "block";
  placeMarkerAndPanTo(currentLatLng, map);
};
