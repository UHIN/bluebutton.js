/*
 * Parser for the C32 family history section
 */

Parsers.C32.care_plan = function (c32) {

  var parseDate = Documents.parseDate;
  var parseName = Documents.parseName;
  var parseAddress = Documents.parseAddress;
  var data = [], el;

  var care_plan = c32.section('care_plan');

  care_plan.entries().each(function(entry) {
    data.push({});
  });

  return data;
};
