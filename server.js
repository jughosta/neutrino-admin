var http = require("http"),
	NeutrinoEntity = require("./structures/neutrino_entity.js");

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});

	var neutrinoEntity = new NeutrinoEntity('MyNeutrino');
	neutrinoEntity.addProperty('MyPropertyName', 'Int', '"MyValue"', true)
		.addProperty('MyPropertyName2', 'Boolean', '"MyValue2"', false)
		.addProperty('MyPropertyName3', 'String', '"MyValue3"', false)
		.addProperty('MyPropertyName4', 'Int', '"MyValue4"', false)
		.addProperty('MyPropertyName5', 'Float', '"MyValue5"', false)
		.addProperty('MyPropertyName6', 'Date', '"MyValue6"', false)
		.addProperty('MyPropertyName7', {type: 'String', pattern: '[0-9]+'}, '"MyValue7"', false)
		.addProperty('MyPropertyName8', {type: 'String', pattern: '[0-9]+', flags: 'g'}, '"MyValue8"', false)
		.addMethod('MyMethod', false)
			.addParameterToMethod('arg1', 'String')
			.addParameterToMethod('arg2', 'Int')
		.addMethod('MyMethod2', true)
			.addParameterToMethod('arg3', 'Float', 'MyMethod')
			.addParameterToMethod('arg20', 'Date')
		.addSendDataMethod('MySendDataMethod', false)
		.addSendDataMethod('MySendDataMethod2', true)
		.addNotifyToUserMethod('MyNotifyMethod');

	neutrinoEntity.generateModel(function (generatedModel) {
		res.end(generatedModel);
	});

}).listen(1337, '127.0.0.1');