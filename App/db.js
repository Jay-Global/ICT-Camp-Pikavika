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

let address, value, email; //Add lat, long for coordinates

function sendData() {
  document.getElementById("button-send").onclick = () => {
    // this.lat = document.getElementById("current-latitude").value; //add for coordinate sending
    // this.long = document.getElementById("current-longitude").value; //add for coordinate sending
    address = document.getElementById("address-input").value;
    value = document.getElementById("defect-input").value;
    email = document.getElementById("email-input").value;

    firebase
      .database()
      .ref("viat/" + address)
      .set({
      //  Lat: lat,
       // Long: long,
        Osoite: address,
        Vika: value,
        Sposti: email,
      });
  };
}
