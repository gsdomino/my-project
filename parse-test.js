$(function() {
 
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("t7j3bcOoZU9elelY9a9kZP5iOwwyNMfTc58pc3kc", "DMxFjUwtS1jvjTdb3yUFOUjiC1AUTeg8ohmr0G6m");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar", myData: "George"}).then(function(object) {
      alert("yay! it worked");
    });
    console.log(testObject);
 
});