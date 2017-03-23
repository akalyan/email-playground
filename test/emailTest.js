var path = require('path');
var emailHelper = require('../helpers/emailHelper');
var iterationCount = 100000;
var max = 100000;
var min = 0;
var mockUnsortedFormString = '';

/*
  We mock up the fake input form string with a much larger string than what would be realistic.
  Then run it through a time test. The current iteration count is 100k entries and generally rounds out to about
  150ms.
  Generally the more dupes you have in the object the better the performance because the lookup on objects is O(1),
  so increasing or decreasing the max value adjusts the performance as expected.
 */

for (var i = 0; i < iterationCount; i++) {
  var randomAppend = (Math.floor(Math.random() * (max - min)) + min);
  mockUnsortedFormString += 'test' + randomAppend + '@test.com, ';
}

console.time('test');
emailHelper(mockUnsortedFormString);
console.timeEnd('test');