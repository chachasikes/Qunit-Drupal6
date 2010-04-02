; $Id$

"QUnit is a powerful, easy-to-use, JavaScript test suite. It's used by the
 jQuery project to test its code and plugins but is capable of testing any
 generic JavaScript code (and even capable of testing JavaScript code
 on the server-side). "
From the QUnit documentation page: http://docs.jquery.com/QUnit

QUnit
---------
This is a module that adds the QUnit javascript library to your Drupal 6 
site. 

Drupal is considering integrating QUnit into Drupal 7. This module 
simply provides the basic functions of QUnit for Drupal 6 sites.
http://drupal.org/project/qunit


What is the module useful for?
------------------------------
* Adds Qunit javascript library to all Drupal pages.
* You can then write tests for your javascript. See QUnit documentation.



Version
-------
DEVELOPMENT VERSION, I will add this to Drupal CVS as soon as I can get a CVS account.

Installation
------------
1. To install place the entire qunit module in your modules directory.

2. Download the QUnit javascript library from github: http://github.com/jquery/qunit

Place the qunit folder into sites/*/modules/qunit/includes

So you should have:
  sites/*/modules/qunit/includes/qunit/qunit.js
  sites/*/modules/qunit/includes/qunit/qunit.css

3. Go to Administer -> Site building -> Modules and enable the QUnit module.
4. Go to Administer -> User management -> Permissions -> [admin/user/permissions] to set up permissions.
5. Add your tests to your javascript files. Test results will appear at the bottom of the page.

Git hub: git@github.com:chachasikes/List-Mixer.git


Maintainer
-----------
Chach Sikes, chachasikes
http://drupal.org/user/50674

(Development on this module began 4/2/2010)