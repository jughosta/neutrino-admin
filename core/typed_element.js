module.exports = TypedElement;

/**
 * Create new instance of typed element.
 * @param {String|Object} typeOrParams
 * @constructor
 */
function TypedElement (typeOrParams) {

	if (typeof typeOrParams === 'undefined') {
		return;
	}
	if (typeof typeOrParams === 'object' && typeOrParams.type) {
		this.params = typeOrParams;
		this.signature = typeOrParams.type;
	}
	else {
		this.params = null;
		this.signature = typeOrParams || this.signature;
	}

	this._resolveType();
}

/**
 * Typed element signature.
 * @type {Object}
 */
TypedElement.prototype.signature = 'DefaultTypedElementSignature';

/**
 * Typed element params.
 * @type {Object}
 */
TypedElement.prototype.params = null;

/**
 * Is type Int?
 * @type {Boolean}
 */
TypedElement.prototype.isInt = false;

/**
 * Is type Float?
 * @type {Boolean}
 */
TypedElement.prototype.isFloat = false;

/**
 * Is type Date?
 * @type {Boolean}
 */
TypedElement.prototype.isDate = false;

/**
 * Is type Boolean?
 * @type {Boolean}
 */
TypedElement.prototype.isBoolean = false;

/**
 * Is type String with RegExp params?
 * @type {Boolean}
 */
TypedElement.prototype.isString = false;

/**
 * Resolve type
 * @private
 */
TypedElement.prototype._resolveType = function () {
	if (this.params && this.params.type) {
		delete this.params.type;
	}
	if (!this.signature) {
		return;
	}
	switch (this.signature.toLowerCase()) {
		case 'int':
			this.isInt = true;
			break;
		case 'float':
			this.isFloat = true;
			break;
		case 'date':
			this.isDate = true;
			break;
		case 'boolean':
			this.isBoolean = true;
			break;
		case 'string':
			this.isString = true;
			break;
	}
};