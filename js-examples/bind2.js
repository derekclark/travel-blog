function dummy(i, callback) {
	setTimeout(function() {
		// After 1 second, we callback with a result
    	callback('dumb result')
    }, 1000);
}


for (var i = 0; i < 10; i++) {
	dummy(i, myCallback.bind({j:i}))
}

function myCallback(response) {
  console.log("i = " + this.j + " , response = " + response);
}
