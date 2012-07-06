module.exports = EntityStructure;

var util = require('util'),
	TemplateElement = require('./template_element.js');

util.inherits(EntityStructure, TemplateElement);

/**
 * Create new instance of entity.
 * @param {String} name
 * @constructor
 */
function EntityStructure (name) {

	this.name = name || this.name;
	this.properties = {};
	this.methods = {};
}

/**
 * Name of entity.
 * @type {String}
 */
EntityStructure.prototype.name = 'EntityDefaultName';

/**
 * Properties of entity.
 * @type {Object}
 */
EntityStructure.prototype.properties = {};

/**
 * Methods of entity.
 * @type {Object}
 */
EntityStructure.prototype.methods = {};

/**
 * Add property to current entity.
 * @param {PropertyElement} property
 * @return {EntityStructure}
 * @private
 */
EntityStructure.prototype.addProperty_ = function (property) {

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
 * @return {EntityStructure}
 * @private
 */
EntityStructure.prototype.addMethod_ = function (method) {

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

	method.linkEntityName(this.name);
	methods.push(method);

	return this;
};

/**
 * Add parameter to method.
 * @param {ParameterElement} parameter
 * @param {String} methodType
 * @param {String} methodName
 * @return {EntityStructure}
 * @private
 */
EntityStructure.prototype.addParameterToMethod_ = function (parameter, methodType, methodName) {

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
EntityStructure.prototype.addParameterToParametersOfMethod_ = function (parameter, methods, index) {

	if (!parameter || !methods) {
		throw new Error('Incorrect parameter');
	}

	if (typeof index === 'undefined') {
		index = methods.length - 1;
	}

	methods[index].parameters.push(parameter);
};

