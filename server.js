var http = require("http"),
	NeutrinoModel = require("./structures/neutrino_model_structure.js");

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});

	var model = new NeutrinoModel('MyNeutrinoModel');
	model.addProperty('MyPropertyName', 'Number', '"MyValue"', true)
		.addProperty('MyPropertyName2', 'Boolean', '"MyValue2"', false)
		.addProperty('MyPropertyName3', 'String', '"MyValue3"', true)
		.addMethod('MyMethod', false)
			.addParameterToMethod('arg1', 'String')
			.addParameterToMethod('arg2', 'Number')
		.addMethod('MyMethod2', true)
			.addParameterToMethod('arg2', 'String', 'MyMethod')
			.addParameterToMethod('arg20', 'Number')
		.addSendDataMethod('MySendDataMethod', false)
		.addSendDataMethod('MySendDataMethod2', true)
		.addNotifyToUserMethod('MyNotifyMethod', true)
		.addNotifyToUserMethod();

	model.render('./templates/neutrino_model.tpl', function (generatedModel) {
		res.end(generatedModel);
	});

}).listen(1337, '127.0.0.1');