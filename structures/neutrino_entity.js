module.exports = NeutrinoEntity;

var util = require('util'),
	config = require('./../config.js'),
	EntityBase = require('./../core/entity_base.js'),
	PropertyElement = require('./../core/property_element.js'),
	MethodElement = require('./../core/method_element.js'),
	ParameterElement = require('./../core/parameter_element.js');

util.inherits(NeutrinoEntity, EntityBase);

/**
 * Create new instance of "neutrino entity".
 * @param {String} name
 * @constructor
 */
function NeutrinoEntity (name) {

	if (!name) {
		throw new Error('Name for Neutrino Entity is not set');
	}
	EntityBase.apply(this, arguments);
}

/**
 * Current "neutrino entity" method kinds.
 * @enum {String}
 */
NeutrinoEntity.prototype.methodKinds = {
	DEFAULT: '$',
	SEND_DATA: '$sendData',
	NOTIFY_TO_USER: '$notify'
};

/**
 * Current "neutrino entity" property kinds.
 * @enum {String}
 */
NeutrinoEntity.prototype.propertyKinds = {
	DEFAULT: '$'
};

/**
 * Add property to current "neutrino entity".
 * @param {String} name
 * @param {String} type
 * @param {.} value
 * @param {Boolean} isPrivate
 * @return {EntityBase}
 */
NeutrinoEntity.prototype.addProperty = function (name, type, value, isPrivate) {

	if (!name) {
		throw new Error('Property name for Neutrino Entity is not set');
	}
	return this.addProperty_(new PropertyElement(name, type, value, isPrivate, this.propertyKinds.DEFAULT));
};

/**
 * Add method to current "neutrino entity".
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityBase}
 */
NeutrinoEntity.prototype.addMethod = function (name, isPrivate) {

	if (!name) {
		throw new Error('Method name for Neutrino Entity is not set');
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.DEFAULT));
};

/**
 * Add parameter to method to current "neutrino entity".
 * @param {String} name
 * @param {String|Object} typeOrParams
 * @param {String|undefined} methodName
 * @return {EntityBase}
 */
NeutrinoEntity.prototype.addParameterToMethod = function (name, typeOrParams, methodName) {

	if (!name) {
		throw new Error('Parameter name for Neutrino Entity is not set');
	}
	return this.addParameterToMethod_(new ParameterElement(name, typeOrParams), this.methodKinds.DEFAULT, methodName);
};

/**
 * Add method to current "neutrino entity" for send data to event service.
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityBase}
 */
NeutrinoEntity.prototype.addSendDataMethod = function (name, isPrivate) {

	if (!name) {
		throw new Error('Method name for Neutrino Entity is not set');
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.SEND_DATA));
};

/**
 * Add method to current "neutrino entity" to notify to user.
 * @param {String} name
 * @param {Boolean} isPrivate
 * @return {EntityBase}
 */
NeutrinoEntity.prototype.addNotifyToUserMethod = function (name, isPrivate) {

	if (!name) {
		throw new Error('Method name for Neutrino Entity is not set');
	}
	return this.addMethod_(new MethodElement(name, [], isPrivate, this.methodKinds.NOTIFY_TO_USER));
};

/**
 * Generate Neutrino Entity.
 * @param {Function} callback
 * @param {String} templateFile
 * @param {String} templateString
 */
NeutrinoEntity.prototype.generateEntity_ = function (callback, templateFile, templateString) {

	templateString = templateString || '';
	if (!templateString) {
		this.renderByFile(templateFile, callback);
	}
	else {
		this.renderByString(templateString, callback);
	}
};

/**
 * Generate Neutrino Model.
 * @param {Function} callback
 * @param {String|undefined} templateString
 */
NeutrinoEntity.prototype.generateModel = function (callback, templateString) {

	if (typeof callback != 'function') {
		throw new Error('Callback for generated Neutrino Model is not set');
	}
	this.generateEntity_(callback, config.templates.neutrinoModel, templateString);
};

/**
 * Generate Neutrino Controller.
 * @param {Function} callback
 * @param {String|undefined} templateString
 */
NeutrinoEntity.prototype.generateController = function (callback, templateString) {

	if (typeof callback != 'function') {
		throw new Error('Callback for generated Neutrino Controller is not set');
	}
	this.generateEntity_(callback, config.templates.neutrinoController, templateString);
};