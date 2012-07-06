module.exports = ParameterElement;

var util = require('util'),
	TemplateElement = require('./template_element.js');

util.inherits(ParameterElement, TemplateElement);

/**
 * Create new instance of parameter.
 * @param {String} name
 * @param {String} type
 * @constructor
 */
function ParameterElement (name, type) {

	this.name = name || this.name;
	this.type = type || this.type;
}

/**
 * Parameter name.
 * @type {String}
 */
ParameterElement.prototype.name = 'ParameterDefaultName';

/**
 * Parameter type.
 * @type {String}
 */
ParameterElement.prototype.type = 'ParameterDefaultType';