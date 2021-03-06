'use strict'
 console.log("starting function");

  const AWS = require('aws-sdk');
  var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//   const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handle = function(event, context, callback) {
    var tableName = "MyPlaces";

    dynamodb.putItem({
        "TableName": tableName,
        "Item" : {
            "imageName": {"S": event.imageName },
            "locationDescription": {"S": event.locationDescription},
            "dateTaken": {"S": event.dateTaken},
            "country": {"S": event.country},
            "city": {"S": event.city},
            "lat" : {"S": event.lat},
            "long" : {"S": event.long}
        }
    }, function(err, data) {
        if (err) {
            context.done('error','putting item into dynamodb failed: '+err);
        }
        else {
            console.log('great success: '+JSON.stringify(data, null, '  '));

        }
    });
};
