module.exports = MethodElement;

var util = require('util'),
	TemplateElementBase = require('./template_element_base.js');

util.inherits(MethodElement, TemplateElementBase);

/**
 * Create new instance of method.
 * @param {String} name
 * @param {String[]} parameters
 * @param {Boolean} isPrivate
 * @param {String} kind
 * @constructor
 */
function MethodElement (name, parameters, isPrivate, kind) {

	this.name = name || this.name;
	this.kind = kind || this.kind;
	this.isPrivate = isPrivate || false;
	this.parameters = parameters || [];
}

/**
 * Method name.
 * @type {String}
 */
MethodElement.prototype.name = 'MethodDefaultName';

/**
 * Method kind.
 * @type {String}
 */
MethodElement.prototype.kind = 'MethodDefaultKind';

/**
 * Private state of method.
 * @type {Boolean}
 */
MethodElement.prototype.isPrivate = false;

/**
 * Arguments of method.
 * @type {String[]}
 */
MethodElement.prototype.parameters = [];