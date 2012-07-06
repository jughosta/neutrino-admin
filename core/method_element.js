module.exports = MethodElement;

var util = require('util'),
	TemplateElement = require('./template_element.js');

util.inherits(MethodElement, TemplateElement);

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

/**
 * Link entity name to method.
 * @param {String} name
 */
MethodElement.prototype.linkEntityName = function (name) {
	this.setParentValue(name);
};

/**
 * Get entity name for method.
 * @return {String}
 */
MethodElement.prototype.getEntityName = function () {
	return this.getParentValue();
};