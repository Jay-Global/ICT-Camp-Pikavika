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

let lat, long, address, value, email;

document.getElementById("button-send").onclick = () => {
  //Check that all required fields are filled
  //By default: alert message is empty
  let alertMessage = "";
  //Check if address input field is empty
  //"currentAddressInput.value" returns TRUE if value is NOT empty/null/undefined
  if (!currentAddressInput.value) {
    //If field is empty -> set alert message with a line feed
    alertMessage = "Osoite puuttuu! \n";
  }
  //Check if defect input field is empty
  if (!currentDefectInput.value) {
    //If field is empty -> set new alert message
    //alertMessage = alertMessage + "Vikailmoituksen syy puuttuu!" can be written as below
    alertMessage += "Vikailmoituksen syy puuttuu!";
  }
  //Check if alert message was set -> show message
  if (alertMessage) {
    alert(alertMessage);
    //If alert message was empty -> send data
  } else {
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
    addMarkerAndPanTo(currentLatLng, address, map, value);

    //Send pictures
    //checks if files are selected
    if (files.length != 0) {
      //Loops through all the selected files
      for (let i = 0; i < files.length; i++) {
        //create a storage reference
        var storage = firebase.storage().ref(files[i].name);

        //upload file
        var upload = storage.put(files[i]);

        //update progress bar
        // Toimii, mutta jos tuon poistaa niin ei. En tii?? vaan miten sais n??kym????n

        // upload.on(
        //   "state_changed",
        //   function progress(snapshot) {
        //     var percentage =
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     document.getElementById("progress").value = percentage;
        //   },

        //   function error() {
        //     alert("error uploading file");
        //   },

        //   function complete() {
        //     document.getElementById(
        //       "uploading"
        //     ).innerHTML += `${files[i].name} ="uploaded" <br />`;
        //   }
        // );
      }
    }

    // else {
    //   alert("Ei lis??tt?? kuvaa");
    // }
  }
};

function queryFirebaseData() {
  const query = firebase.database().ref("viat").orderByKey();
  query
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const myJSON = JSON.stringify(childSnapshot);
        const myObj = JSON.parse(myJSON);
        // const li = document.createElement("li");
        // const textnode = document.createTextNode(
        //   childSnapshot.key + " " + JSON.stringify(childSnapshot)
        // );
        // console.log(childSnapshot);
        // li.appendChild(textnode);
        // document.getElementById("defects-list").appendChild(li);
        // placeMarkerAndPanTo({ lat: myObj.Lat, lng: myObj.Long }, map, "testi");
        //Add marker and an info window for every childSnapshot
        addMarkerAndInfoWindow(
          { lat: parseFloat(myObj.Lat), lng: parseFloat(myObj.Long) },
          myObj.Osoite,
          map,
          myObj.Vika
        );
      });
    })
    .catch((error) => {
      console.log(error);
    });
}