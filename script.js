function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 61.494, lng: 23.776 },
      zoom: 14,
      //mapId: "MAP_ID"
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });
  
    map.addListener("click", () => {
      modal.style.display = "block";
    });
  }
  
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
  
  */
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("lisaaVika");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };