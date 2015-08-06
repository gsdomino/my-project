$(function() {
 
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("t7j3bcOoZU9elelY9a9kZP5iOwwyNMfTc58pc3kc", "DMxFjUwtS1jvjTdb3yUFOUjiC1AUTeg8ohmr0G6m");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.set("middle", "Steven");
    testObject.save({foo: "bar", myData: "Domino", address: "6 Braemer"}).then(function(object) {
      alert("yay! it worked");
    });
    console.log(testObject);
    
    var query = new Parse.Query(TestObject);
		query.get(testObject.id, {
  		success: function(testObject) {
    	// The object was retrieved successfully.
    		console.log(testObject);
 		 },
  		error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    		console.log(error);
  }
});
 
});