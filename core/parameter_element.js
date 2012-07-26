module.exports = ParameterElement;

var util = require('util'),
	TypedElement = require('./typed_element.js'),
	TemplateElementBase = require('./template_element_base.js');

util.inherits(ParameterElement, TemplateElementBase);

/**
 * Create new instance of parameter.
 * @param {String} name
 * @param {String|Object} typeOrParams
 * @constructor
 */
function ParameterElement (name, typeOrParams) {

	this.name = name || this.name;

	this.type = new TypedElement(typeOrParams);
}

/**
 * Parameter name.
 * @type {String}
 */
ParameterElement.prototype.name = 'ParameterDefaultName';

/**
 * Parameter type params.
 * @type {Object}
 */
ParameterElement.prototype.type = null;