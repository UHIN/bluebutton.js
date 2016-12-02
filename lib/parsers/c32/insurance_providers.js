/*
 * Parser for the C32 family history section
 */

Parsers.C32.insurance_providers = function (c32) {

  var parseDate = Documents.parseDate;
  var parseName = Documents.parseName;
  var parseAddress = Documents.parseAddress;
  var data = [], el;

  var insurance_providers = c32.section('insurance_providers');

  insurance_providers.entries().each(function(entry) {
    data.push({});
  });

  return data;
};
