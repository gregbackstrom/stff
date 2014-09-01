

var ff = new FatFractal();
ff.setBaseUrl("http://localhost:8081/test");

function STFitProfile() {
	this.clazz = null;
	this.type = null;
	this.shoulderType = null;
	this.shoulderLength = null;
	return this;
}

function saveFitProfile() {
	ff.login("test_user", "T3st_Us3r", function() {
		console.log("LOGGED IN");
		var myStuff = new STFitProfile();
		myStuff.clazz = "STMasterFit";
		myStuff.shoulderType = "square";
		myStuff.shoulderLength = 19;
		ff.createObjAtUri(myStuff, "/STFitProfile",
	    function (data, statusMessage) {
	        // successfully created object
	        console.log('Bro, success!: ' + statusMessage);
	    },
	    function (statusCode, statusMessage) {
	        // error occurred
	        console.log('Bro, errror!: ' + statusCode + ', ' + statusMessage);
	    });	
	}, function(code, msg) {
      console.error("Error logging in: " + code + ", error message" + msg);
    });

	
}
