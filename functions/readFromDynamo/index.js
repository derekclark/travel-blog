'use strict'
 console.log("starting function");

  const AWS = require('aws-sdk');
  // var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handle = function(event, context, callback) {
    let scanningParams = {
      TableName: 'MyPlaces',
      Limit: 100
    }

    docClient.scan(scanningParams, function(err, data){
      if(err){
        callback(err, null);
      }else{
        callback(null, data);
      }
    })
};
