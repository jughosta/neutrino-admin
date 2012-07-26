module.exports = {{entityName}}Model;

var util = require('util'),
    modelEvents = neutrino.mvc.ModelBase.events;

util.inherits({{entityName}}Model, neutrino.mvc.ModelBase);

function {{entityName}}Model(config, modelFileName) {

    // model name will be used for model state saving in database, by default it's a filename

    neutrino.mvc.ModelBase.call(this, config, modelFileName, {
    {{#properties.$}}

        /**
         * @type {{_leftBraceSymbol_}}{{type.signature}}{{_rightBraceSymbol_}}
         */
        {{name}}{{#isPrivate}}_{{/isPrivate}}: {{{value}}}{{^_isLast_}},{{/_isLast_}}{{#_isLast_}}
    {{/_isLast_}}
    {{/properties.$}}
    });

    this.on(modelEvents.dataFromService, function (sender, data) {

        // here processing data from event service with name equal sender

    });
}
{{#methods.$}}
/**
 *
 {{#isPrivate}}* @private
 {{/isPrivate}}
 * @param {Function} callback
 {{#parameters}}* @param {{_leftBraceSymbol_}}{{type.signature}}{{_rightBraceSymbol_}} {{name}}
 {{/parameters}}*/
{{entityName}}Model.prototype.{{name}}{{#isPrivate}}_{{/isPrivate}}{{_spaceSymbol_}}= function (callback{{#parameters}}, {{name}}{{/parameters}}) {
    //processing args and invoke callback with result
};
{{/methods.$}}

{{#methods.$sendData}}
/**
 *
 {{#isPrivate}}* @private
 {{/isPrivate}}
 */
{{entityName}}Model.prototype.{{name}}{{#isPrivate}}_{{/isPrivate}}{{_spaceSymbol_}}= function () {
    var serviceName = '',
        dataObject = {};
    this.emit(modelEvents.sentToService, serviceName, dataObject);
};
{{/methods.$sendData}}

{{#methods.$notify}}
/**
 *
 {{#isPrivate}}* @private
 {{/isPrivate}}
 */
{{entityName}}Model.prototype.{{name}}{{#isPrivate}}_{{/isPrivate}}{{_spaceSymbol_}}= function () {
    var sessionId = '',
        dataObject = {};
    this.emit(modelEvents.notify, sessionId, dataObject);
};
{{/methods.$notify}}