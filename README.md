# travel-blog
## GET GOOGLE MAPS API KEY
to use googlemaps API from javascript, need a google map API KEY
google developers - google maps API key [link here](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true)

Then include the APIKEY in your html. You need to lock down the use of the API KEY to specific mobile apps or IP addresses to avoid it being hi-jacked.

Notes on reverse geocoding [link here](https://developers.google.com/maps/documentation/geocoding/intro)

## CREATE WEB PAGE TO LOAD IMAGES, EXTRACT LOCATION DATA FROM EXIF, WRITE TO DATABASE
file = index.html
exif library [link here] (https://github.com/exif-js/exif-js)

DynamoDB; tablename = **MyPlaces**
partition key = imageName

## CREATE WEB PAGE TO SHOW TRAVELS
file=show-my-places.html

## HOST WEB SITE IN AWS
### UPLOAD WEB PAGES TO STATIC WEB SITE IN S3
in AWS, create new S3 bucket
select S3 bucket>PROPERTIES
expand STATIC WEBSITE HOSTING
set ENABLE WEBSITE HOSTING
set Index document to index.html
click SAVE

now you must give permissions so that anyone can access it
GO TO PROPERTIES>PERMISSIONS
click ADD MORE PERMISSIONS
set GRANTEE TO EVERYONE
click on VIEW PERMISSIONS
click SAVE

Now upload your files which define your website eg. index.html and make them public (ACTIONS>MAKE PUBLIC)
now try the site by going to its URL in a browser, which is found in S3>PROPERTIES>Endpoint eg. travel-log-777.s3-website-eu-west-1.amazonaws.com

My S3 bucket is called **travel-log-777**
