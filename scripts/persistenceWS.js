function writeRecord(imageName, locationDescription, lat, long, dateTaken, country, city){
      var url="https://u0grunhya8.execute-api.eu-west-1.amazonaws.com/prod/blog?imageName="+imageName+"&lat="+lat+"&long="+long
      +"&locationDescription="+locationDescription+"&dateTaken="+dateTaken+"&country="+country+"&city="+city
      console.log(encodeURI(url));
      console.log(url);
      $.ajax({
          type: "POST",
          // dataType: "jsonp",
          url: encodeURI(url)
      }).then(function(data) {
            console.log('database updated')
      });
}
