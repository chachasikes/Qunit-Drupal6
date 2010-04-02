// $Id$

/**
 * @file
 * Load HTML container for test results when page is loaded.
 */

// Establish qUnit namespace.
Drupal.settings.qUnit = {};
Drupal.settings.qUnit.pageLoaded = 0;

/**
 * Create HTML containers for QUnit results.
 * Append to the end of the page.
 */
Drupal.behaviors.qUnitContainer = function() {
  var qUnitContainer = '<h1 id="qunit-header">QUnit example</h1><h2 id="qunit-banner"></h2><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>';  
  $('body').append(qUnitContainer);
};

/**
 * Set up QUnit on all Drupal pages on page load.
 */
Drupal.behaviors.qUnitSetup = function() {
  if (Drupal.settings.qUnit.pageLoaded === 0) {
    Drupal.behaviors.qUnitContainer();
  }
  Drupal.settings.qUnit.pageLoaded++;
};
