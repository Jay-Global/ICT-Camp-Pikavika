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
let lat, long, address, value, email;

// function sendData() {
document.getElementById("button-send").onclick = () => {
  lat = currentLatLng.lat();
  long = currentLatLng.lng();
  address = document.getElementById("address-input").value;
  value = document.getElementById("defect-input").value;
  email = document.getElementById("email-input").value;

  firebase
    .database()
    .ref("viat/" + address)
    .set({
      Lat: lat,
      Long: long,
      Osoite: address,
      Vika: value,
      Sposti: email,
    })
    .then(() => {
      console.log("Data tallennettu onnistuneesti!");
    })
    .catch((error) => {
      console.log(error);
    });

  modalForm.style.display = "none";
  modalThankYou.style.display = "block";
  placeMarkerAndPanTo(currentLatLng, map);
};

function queryFirebaseData() {
  const query = firebase.database().ref("viat").orderByKey();
  query
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const myJSON = JSON.stringify(childSnapshot);
        const myObj = JSON.parse(myJSON);
        const li = document.createElement("li");
        const textnode = document.createTextNode(
          childSnapshot.key + " " + JSON.stringify(childSnapshot)
        );
        console.log(childSnapshot);
        li.appendChild(textnode);
        document.getElementById("defects-list").appendChild(li);
        // placeMarkerAndPanTo({ lat: myObj.Lat, lng: myObj.Long }, map, "testi");
        addMarkerAndInfoWindow(
          { lat: myObj.Lat, lng: myObj.Long },
          map,
          myObj.Vika
        );
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
