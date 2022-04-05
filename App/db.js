const firebaseConfig = {
  apiKey: "AIzaSyBZD9HglzdHT62aeUB1h2lURFgeFU4inAA",
  authDomain: "react-testi-3669e.firebaseapp.com",
  databaseURL:
    "https://react-testi-3669e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-testi-3669e",
  storageBucket: "react-testi-3669e.appspot.com",
  messagingSenderId: "911943831086",
  appId: "1:911943831086:web:e9bfaac7623e7bd04c59bf",
};

firebase.initializeApp(firebaseConfig);

let name, value, lat, long;

document.getElementById("lisaaVika").onclick = () => {
  name = document.getElementById("nameInput").value;
  value = document.getElementById("valueInput").value;
  lat = document.getElementById("latInput").value;
  long = document.getElementById("longInput").value;

  firebase
    .database()
    .ref("viat/" + name)
    .set({
      Nimi: name,
      Arvo: value,
      Lat: lat,
      Long: long,
    });
};
