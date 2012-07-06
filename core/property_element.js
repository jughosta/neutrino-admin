module.exports = PropertyElement;

var util = require('util'),
	TemplateElement = require('./template_element.js');

util.inherits(PropertyElement, TemplateElement);

/**
 * Create new instance of property.
 * @param {String} name
 * @param {.} value
 * @param {Boolean} isPrivate
 * @param {String} kind
 * @constructor
 */
function PropertyElement (name, value, isPrivate, kind) {

	this.name = name || this.name;
	this.value = value || this.value;
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
PropertyElement.prototype.value = 'PropertyDefaultValue';

/**
 * Property kind.
 * @type {String}
 */
PropertyElement.prototype.kind = 'PropertyDefaultKind';

/**
 * Private state of property.
 * @type {Boolean}
 */
PropertyElement.prototype.isPrivate = false;