var ExifImage = require('exif').ExifImage;
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

try {
    new ExifImage({ image : 'IMG_20170227_163002.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
            console.log(exifData);
            console.log("GPSLongitude = " + exifData.gps.GPSLongitude);
            console.log("lon="+getLon(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef));
            console.log("lat="+getLat(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef));
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
