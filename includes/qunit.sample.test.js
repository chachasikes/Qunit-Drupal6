// $Id$

/**
 * @file 
 * Sample QUnit Test.
 */

$(document).ready( function() {
  test("a basic test example", function() {
    ok(true, "this test is fine");
    var value = "hello";
    equals("hello", value, "We expect value to be hello");
  });
});