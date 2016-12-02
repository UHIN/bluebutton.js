/*
 * Parser for the C32 family history section
 */

Parsers.C32.family_history = function (c32) {

  var parseDate = Documents.parseDate;
  var parseName = Documents.parseName;
  var parseAddress = Documents.parseAddress;
  var data = [], el;

  var family_history = c32.section('family_history');

  family_history.entries().each(function(entry) {
    data.push({});
  });

  return data;
};
