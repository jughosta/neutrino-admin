var http = require("http"),
	NeutrinoModel = require("./structures/neutrino_model_structure.js");

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});

	var model = new NeutrinoModel('MyNeutrinoModel');
	model.addProperty('MyPropertyName', '"MyValue"', true)
		.addProperty('MyPropertyName2', '"MyValue2"', false)
		.addProperty('MyPropertyName3', '"MyValue3"', true)
		.addMethod('MyMethod', false)
			.addParameterToMethod('arg1', 'string')
			.addParameterToMethod('arg2', 'number')
		.addMethod('MyMethod2', true)
			.addParameterToMethod('arg2', 'string', 'MyMethod')
			.addParameterToMethod('arg20', 'number')
		.addSendDataMethod('MySendDataMethod', false)
		.addSendDataMethod('MySendDataMethod2', true)
		.addNotifyToUserMethod('MyNotifyMethod', true)
		.addNotifyToUserMethod();

	model.render('./templates/neutrino_model.tpl', function (generatedModel) {
		res.end(generatedModel);
	});

}).listen(1337, '127.0.0.1');