var soap = require('strong-soap').soap;
var XMLHandler = soap.XMLHandler;
var xmlHandler = new XMLHandler();
var util = require('util');
var url = 'http://www.webservicex.net/stockquote.asmx?WSDL';
 
var requestArgs = {
  symbol: 'IBM'
};
 
var options = {};
var clientOptions = {};
soap.createClient(url, clientOptions, function(err, client) {
  var customRequestHeader = {customheader1: 'test1'};
  client.GetQuote(requestArgs, function(err, result, envelope, soapHeader) {
    // Convert 'result' JSON object to XML
    var node = xmlHandler.jsonToXml(null, null,
      XMLHandler.createSOAPEnvelopeDescriptor('soap'), result);
    var xml = node.end({pretty: true});
    console.log(xml);
 
    // Convert XML to JSON object
    var root = xmlHandler.xmlToJson(null, xml, null);
    console.log('%s', util.inspect(root, {depth: null}));
 
  }, options, customRequestHeader);
});
