module.exports = PropertyElement;

var util = require('util'),
	TypedElement = require('./typed_element.js'),
	TemplateElementBase = require('./template_element_base.js');

util.inherits(PropertyElement, TemplateElementBase);

/**
 * Create new instance of property.
 * @param {String} name
 * @param {String|Object} typeOrParams
 * @param {.} value
 * @param {Boolean} isPrivate
 * @param {String} kind
 * @constructor
 */
function PropertyElement (name, typeOrParams, value, isPrivate, kind) {

	this.name = name || this.name;
	this.value = value || this.value;
	this.type = new TypedElement(typeOrParams);
	this.kind = kind || this.kind;
	this.isPrivate = isPrivate || false;
}

/**
 * Property name.
 * @type {String}
 */
PropertyElement.prototype.name = 'PropertyDefaultName';

/**
 * Property value.
 * @type {String}
 */
PropertyElement.prototype.value = '"PropertyDefaultValue"';

/**
 * Property kind.
 * @type {String}
 */
PropertyElement.prototype.kind = 'PropertyDefaultKind';

/**
 * Property type.
 * @type {Object}
 */
PropertyElement.prototype.type = null;

/**
 * Private state of property.
 * @type {Boolean}
 */
PropertyElement.prototype.isPrivate = false;