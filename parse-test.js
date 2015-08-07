$(function() {
 
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("t7j3bcOoZU9elelY9a9kZP5iOwwyNMfTc58pc3kc", "DMxFjUwtS1jvjTdb3yUFOUjiC1AUTeg8ohmr0G6m");
 
    var TestObject = Parse.Object.extend("TestObject", {
    	initialize: function() {
    		console.log("initialized");
    		}
    	});
    var testObject = new TestObject();
    testObject.set("middle", "Steven");
    testObject.save({
    	foo: "bar", 
    	myName: "Jones", 
    	myAddress: "9 Braemer",
    	myCity: "New Jack",
    	myState: "Confusion",
    	myCountry: "Good Ol USA",
    	planet: "Earth"}).then(function() 					{
    		console.log("yay! it worked")
    	}). then(function(object) {
				console.log(testObject.id);  
    		
});

});