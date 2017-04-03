function getLat(lat, latRef)
{
  latRef = latRef || "N";
  return (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef == "N" ? 1 : -1);
}

function getLon(lon, lonRef)
{
  lonRef = lonRef || "W";
  return (lon[0] + lon[1]/60 + lon[2]/3600) * (lonRef == "W" ? -1 : 1);
}

function getEXIF(fileName){
  EXIF.getData(fileName, function() {
    var lat = EXIF.getTag(this, "GPSLatitude");
    var latRef = EXIF.getTag(this, "GPSLatitudeRef");
    var lon = EXIF.getTag(this, "GPSLongitude");
    var lonRef = EXIF.getTag(this, "GPSLongitudeRef");
    var dateTaken = EXIF.getTag(this, "DateTimeOriginal");
    var imagename=this.name;
    console.log(imagename);

    console.log('converted lat='+getLat(lat, latRef));
    console.log('converted lon='+getLon(lon, lonRef));
    console.log(dateTaken);
    lat=getLat(lat, latRef);
    lon=getLon(lon, lonRef);
    var geocoder = new google.maps.Geocoder;
    var locations = [];
    reverseGeocode(geocoder, lat, lon, locations, dateTaken, imagename);
    console.log("loc="+locations.length);
  });
}
