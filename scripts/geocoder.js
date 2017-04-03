function reverseGeocode(geocoder, lat, long, locationDetails, dateTaken, imagename) {
  var latlng = {lat: parseFloat(lat), lng: parseFloat(long)};
  var address="initial";
  var results;
  var status;
  geocoder.geocode({'location': latlng}, geocodeCallback.bind({latitude:lat, longitude:long, locations:locationDetails,
    dateTaken:dateTaken, imagename:imagename}));
  console.log("AT END OF FUNCTION address="+address);
}

geocodeCallback = function (results, status) {
  if (status === 'OK') {
    console.log("REPLY FROM GEOCCODER - ok " + results[0].formatted_address);
    address="ok";
    address = results[0].formatted_address;
    console.log("results="+results[0])
    console.log(results[0].formatted_address);
    console.log(results[0].geometry.location.lng());
    console.log(results[0].geometry.location.lat());
    console.log(results[0].address_components[1].long_name);

    // var country=results[0].address_components[5].long_name
    // console.log("type="+results[0].address_components[5].types);

    var country = getCountry(results[0])
    var city = getCity(results[0])
    console.log("city="+city);

    this.locations = [
      [address, this.latitude, this.longitude, 4, this.dateTaken, this.imagename, country, city]
    ]
    displayLocationDetails(this.locations);
    putMarkerOnMap(this.locations)
    writeRecord(this.imagename, address, this.latitude,
      this.longitude, this.dateTaken, country, city)
  } else {
    window.alert('Geocoder failed due to: ' + status);
    address="failed";
  }
  console.log("IN FUNCTION AT END OF CALLBACK ADDRESS="+address);
}
