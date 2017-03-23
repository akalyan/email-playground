module.exports = function (emails) {
  var emailsToSort = emails.split(',');

  // TODO: Improve on this regex statement
  var emailRegex = /^[a-zA-Z0-9]+@+./;
  var sortedEmailObject = {};

  for (var i = 0; i < emailsToSort.length; i++) {
    var thisEmail = emailsToSort[i].trim();

    if (!sortedEmailObject[thisEmail] && emailRegex.test(thisEmail)) {
      sortedEmailObject[thisEmail] = thisEmail;
    }
  }

  return sortedEmailObject;
};