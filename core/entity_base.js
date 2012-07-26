module.exports = EntityBase;

var util = require('util'),
	TemplateElementBase = require('./template_element_base.js');

util.inherits(EntityBase, TemplateElementBase);

/**
 * Create new instance of entity.
 * @param {String} name
 * @constructor
 */
function EntityBase (name) {

	this.entityName = name || this.entityName;
	this.properties = {};
	this.methods = {};
}

/**
 * Name of entity.
 * @type {String}
 */
EntityBase.prototype.entityName = 'EntityDefaultName';

/**
 * Properties of entity.
 * @type {Object}
 */
EntityBase.prototype.properties = {};

/**
 * Methods of entity.
 * @type {Object}
 */
EntityBase.prototype.methods = {};

/**
 * Add property to current entity.
 * @param {PropertyElement} property
 * @return {EntityBase}
 * @private
 */
EntityBase.prototype.addProperty_ = function (property) {

	if (!property || !property.name || !property.kind) {
		throw new Error('Incorrect property');
	}

	var properties = this.properties[property.kind];

	if (!properties) {
		properties = this.properties[property.kind] = [];
	}

	if (properties.length > 0) {
		properties[properties.length - 1].moveFromLastPosition();
	}

	properties.push(property);
	return this;
};

/**
 * Add method to current entity.
 * @param {MethodElement} method
 * @return {EntityBase}
 * @private
 */
EntityBase.prototype.addMethod_ = function (method) {

	if (!method || !method.name || !method.kind) {
		throw new Error('Incorrect Method');
	}

	var methods = this.methods[method.kind];

	if (!methods) {
		methods = this.methods[method.kind] = [];
	}

	if (methods.length > 0) {
		methods[methods.length - 1].moveFromLastPosition();
	}

	methods.push(method);

	return this;
};

/**
 * Add parameter to method.
 * @param {ParameterElement} parameter
 * @param {String} methodType
 * @param {String} methodName
 * @return {EntityBase}
 * @private
 */
EntityBase.prototype.addParameterToMethod_ = function (parameter, methodType, methodName) {

	if (!parameter || !methodType) {
		throw new Error('Incorrect parameter for method');
	}

	var methods = this.methods[methodType];

	if (!methods || methods.length === 0) {
		return this;
	}

	if (typeof methodName === 'undefined') { // to last added method
		this.addParameterToParametersOfMethod_(parameter, methods);
		return this;
	}

	for (var i = 0; i < methods.length; i++) {
		if (methods[i].name != methodName) {
			continue;
		}
		this.addParameterToParametersOfMethod_(parameter, methods, i);
		break;
	}

	return this;
};

/**
 * Add parameter to method.
 * @param {ParameterElement} parameter
 * @param {MethodElement[]} methods
 * @param {Number} index
 * @private
 */
EntityBase.prototype.addParameterToParametersOfMethod_ = function (parameter, methods, index) {

	if (!parameter || !methods) {
		throw new Error('Incorrect parameter');
	}

	if (typeof index === 'undefined') {
		index = methods.length - 1;
	}

	methods[index].parameters.push(parameter);
};

