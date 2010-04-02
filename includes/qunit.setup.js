// $Id$

/**
 * @file
 */

var pageLoaded = 0;

Drupal.behaviors.qunit = function() {
  if (pageLoaded === 0) {
    qUnitTestSetup();
  }
  pageLoaded++;
};

function qUnitTestSetup() {
  test("a basic test example", function() {
    ok( true, "this test is fine" );
    var value = "hello";
    equals( "hello", value, "We expect value to be hello" );
  });
  
  var qunit_container ='<h1 id="qunit-header">QUnit example</h1><h2 id="qunit-banner"></h2><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>';
  
  $('body').append(qunit_container);
}
