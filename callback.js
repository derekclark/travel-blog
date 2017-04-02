function RandHash(callback){
  setTimeout(function (){
    var result = Math.floor((Math.random()*10000)+1)
    callback(result)
  }, 1000)
}

function displayMessage(message){
  console.log(message);
}

var theAnswer

RandHash(function myCallBack(theNumber){
  console.log('executing callback')
  theAnswer=theNumber
  displayMessage(theNumber)
  displayMessage(theAnswer)
})
console.log("at program END");
