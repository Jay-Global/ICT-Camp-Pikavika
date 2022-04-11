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

let address, about, email;

document.getElementById("lisaaVika").onclick = () => {
  address = document.getElementById("addressInput").value;
  about = document.getElementById("aboutInput").value;
  email = document.getElementById("emailInput").value;
  //lat = document.getElementById("current-latitude").value;
  //long = document.getElementById("current-longitude").value;

  firebase
    .database()
    .ref("viat/" + address)
    .set({
      Nimi: name,
      Arvo: value,
      Lat: lat,
      Long: long,
    })
    .then(() => {
      console.log("Data tallennettu onnistuneesti!");
    })
    .catch((error) => {
      console.log(error);
    });
};

function queryFirebaseData() {
  const query = firebase.database().ref("viat").orderByKey();
  query
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const li = document.createElement("li");
        const textnode = document.createTextNode(
          childSnapshot.key + " " + JSON.stringify(childSnapshot)
        );
        li.appendChild(textnode);
        document.getElementById("listaus").appendChild(li);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
