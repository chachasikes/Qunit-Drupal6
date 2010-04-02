// $Id$

/**
 * @file
 * Load HTML container for test results when page is loaded.
 */

Drupal.settings.qunit = {};
Drupal.settings.qunit.pageLoaded = 0;

Drupal.behaviors.qunit = function() {
  if (Drupal.settings.qunit.pageLoaded === 0) {
    qUnitTestSetup();
  }
  Drupal.settings.qunit.pageLoaded++;
};
/**
 * Create HTML containers for QUnit results.
 * Append to the end of the page.
 */
function qUnitTestSetup() {
  var qunit_container ='<h1 id="qunit-header">QUnit example</h1><h2 id="qunit-banner"></h2><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>';  
  $('body').append(qunit_container);
};
