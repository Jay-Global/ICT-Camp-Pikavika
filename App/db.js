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

let address, value, lat, long;

document.getElementById("button-send").onclick = () => {
  address = document.getElementById("address-input").value;
  value = document.getElementById("defect-input").value;
  lat = document.getElementById("current-latitude").value;
  long = document.getElementById("current-longitude").value;

  firebase
    .database()
    .ref("viat/" + address)
    .set({
      Osoite: address,
      Vika: value,
      Lat: lat,
      Long: long,
    });
};
