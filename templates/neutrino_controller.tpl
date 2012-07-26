module.exports = {{entityName}}Controller;

var util = require('util');
util.inherits({{entityName}}Controller, neutrino.mvc.ControllerBase);

function {{entityName}}Controller(config, modelFileName, model, view) {

    neutrino.mvc.ModelBase.call(this, config, modelFileName, model, view);
}

{{entityName}}Controller.prototype.accessValidator = function (sessionId, callback) {
    // check user by sessionId for whole model access and invoke callback
    callback(new Error('Access denied'));
};

{{#properties.$}}{{^isPrivate}}
{{entityName}}Controller.prototype.{{name}}GetValidator = function (sessionId, callback) {
    // check user by sessionId for model property get access
    callback(null);
};

/**
 * @param {{_leftBraceSymbol_}}{{type.signature}}{{_rightBraceSymbol_}} newValue
 */
{{entityName}}Controller.prototype.{{name}}SetValidator = function(newValue, sessionId, callback){
    {{#type.isInt}}
    if(isNaN(parseInt(newValue))) {
        callback(new Error('Incorrect integer number'));
        return;
    }
    {{/type.isInt}}

    {{#type.isFloat}}
    if(isNaN(parseFloat(newValue))) {
        callback(new Error('Incorrect float number'));
        return;
    }
    {{/type.isFloat}}

    {{#type.isDate}}
    if(isNaN(Date.parse(newValue))) {
        callback(new Error('Incorrect date format'));
        return;
    }
    {{/type.isDate}}

    {{#type.isBoolean}}
    if(newValue !== true && newValue !== false) {
        callback(new Error('Incorrect boolean format'));
        return;
    }
    {{/type.isBoolean}}

    {{#type.isString}}
    {{#type.params.pattern}}var regexp = new RegExp("{{type.params.pattern}}"{{#type.params.flags}}, "{{type.params.flags}}"{{/type.params.flags}});
    if(!regexp.test(newValue)) {
        callback(new Error(util.format('Incorrect string format, %s required', "{{type.params.pattern}}")));
        return;
    }{{/type.params.pattern}}
    {{^type.params.pattern}}
    if(typeof newValue != 'string') {
        callback(new Error('Incorrect string format'));
        return;
    }
    {{/type.params.pattern}}
    {{/type.isString}}

    // check user by sessionId for model property set access and new value validation
    callback(null);
};
{{/isPrivate}}{{/properties.$}}

{{#methods.$}}{{^isPrivate}}
/**
 *
 * @param {String} sessionId
 * @param {Function} callback
 {{#parameters}}* @param {{_leftBraceSymbol_}}{{type.signature}}{{_rightBraceSymbol_}} {{name}}
 {{/parameters}}*/
{{entityName}}Controller.prototype.{{name}}InvokeValidator = function (sessionId, callback{{#parameters}}, {{name}}{{/parameters}}) {
    {{#parameters}}{{#type.isInt}}
    if(isNaN(parseInt({{name}}))) {
        callback(new Error('Incorrect integer number'));
        return;
    }
    {{/type.isInt}}

    {{#type.isFloat}}
    if(isNaN(parseFloat({{name}}))) {
        callback(new Error('Incorrect float number'));
        return;
    }
    {{/type.isFloat}}

    {{#type.isDate}}
    if(isNaN(Date.parse({{name}}))) {
        callback(new Error('Incorrect date format'));
        return;
    }
    {{/type.isDate}}

    {{#type.isBoolean}}
    if({{name}} !== true && {{name}} !== false) {
        callback(new Error('Incorrect boolean format'));
        return;
    }
    {{/type.isBoolean}}

    {{#type.isString}}
    {{#type.params.pattern}}var regexp = new RegExp("{{type.params.pattern}}"{{#type.params.flags}}, "{{type.params.flags}}"{{/type.params.flags}});
    if(!regexp.test({{name}})) {
        callback(new Error(util.format('Incorrect string format, %s required', "{{type.params.pattern}}")));
        return;
    }{{/type.params.pattern}}
    {{^type.params.pattern}}
    if(typeof {{name}} != 'string') {
        callback(new Error('Incorrect string format'));
        return;
    }
    {{/type.params.pattern}}
    {{/type.isString}}{{/parameters}}
    // check user by sessionId for model method invoke access and invocation arguments
    callback(new Error('Wrong arguments'));
};
{{/isPrivate}}{{/methods.$}}