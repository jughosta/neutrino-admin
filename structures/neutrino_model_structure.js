module.exports = NeutrinoModelStructure;

var util = require('util'),
	EntityStructure = require('./../core/entity_structure.js'),
	PropertyElement = require('./../core/property_element.js'),
	MethodElement = require('./../core/method_element.js'),
	ParameterElement = require('./../core/parameter_element.js');

util.inherits(NeutrinoModelStructure, EntityStructure);

/**
 * Create new instance of neutrino model structure.
 * @constructor
 */
function NeutrinoModelStructure () {

	EntityStructure.apply(this, arguments);
}

/**
 * Current model name.
 * @kind {String}
 */
NeutrinoModelStructure.prototype.name = 'ModelName';

/**
 * Current model method kinds.
 * @enum {String}
 */
NeutrinoModelStructure.prototype.methodKinds = {
	DEFAULT: '$',
	SEND_DATA: '$sendData',
	NOTIFY_TO_USER: '$notify'
};

/**
 * Current model property kinds.
 * @enum {String}
 */
NeutrinoModelStructure.prototype.propertyKinds = {
	DEFAULT: '$'
};

/**
 * Add property to current model.
 * @param {String} name
 * @param {.} value
 * @param {Boolean} isPrivate
 * @return {EntityStructure}
 */
NeutrinoModelStructure.prototype.addProperty = function (name, value, isPrivate) {

	if (!name) {
		//TODO: throw error
	}
	return this.addProperty_(new PropertyElement(name, value, isPrivate, this.propertyKinds.DEFAULT));
};

/**
 * Add method to current model.
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityStructure}
 */
NeutrinoModelStructure.prototype.addMethod = function (name, isPrivate) {

	if (!name) {
		//TODO: throw error
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.DEFAULT));
};

/**
 * Add parameter to method to current model.
 * @param {String} name
 * @param {String} type
 * @param {String|undefined} methodName
 * @return {EntityStructure}
 */
NeutrinoModelStructure.prototype.addParameterToMethod = function (name, type, methodName) {

	if (!name || !type || !methodName) {
		//TODO: throw error
	}
	return this.addParameterToMethod_(new ParameterElement(name, type), this.methodKinds.DEFAULT, methodName);
};

/**
 * Add method to current model for send data to event service.
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityStructure}
 */
NeutrinoModelStructure.prototype.addSendDataMethod = function (name, isPrivate) {

	if (!name) {
		//TODO: throw error
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.SEND_DATA));
};

/**
 * Add method to current model to notify to user.
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityStructure}
 */
NeutrinoModelStructure.prototype.addNotifyToUserMethod = function (name, isPrivate) {

	if (!name) {
		//TODO: throw error
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.NOTIFY_TO_USER));
};