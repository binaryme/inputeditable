// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by inputeditable.js.
import { name as packageName } from "meteor/nubestra:inputeditable";

// Write your tests here!
// Here is an example.
Tinytest.add('inputeditable - example', function (test) {
  test.equal(packageName, "inputeditable");
});
