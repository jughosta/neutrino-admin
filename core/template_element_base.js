module.exports = TemplateElementBase;

var fs = require("fs"),
	mustache = require("mustache");

/**
 * Create new instance of template element.
 * @constructor
 */
function TemplateElementBase () {

}

/**
 * Is last?.
 * @type {boolean}
 */
TemplateElementBase.prototype._isLast_ = true;

/**
 * Move from last position.
 */
TemplateElementBase.prototype.moveFromLastPosition = function () {
	this._isLast_ = false;
};

/**
 * Value of parent template element.
 * @type {String}
 */
TemplateElementBase.prototype._parentValue_ = '';

/**
 * Set parent value.
 * @param {String} value
 */
TemplateElementBase.prototype.setParentValue = function (value) {
	this._parentValue_ = value || '';
};

/**
 * Set parent value.
 * @return {String}
 */
TemplateElementBase.prototype.getParentValue = function () {
	return this._parentValue_;
};

/**
 * Space symbol in template.
 * @type {String}
 */
TemplateElementBase.prototype._spaceSymbol_ = ' ';

/**
 * Right brace symbol in template.
 * @type {String}
 */
TemplateElementBase.prototype._rightBraceSymbol_ = '}';

/**
 * Left brace symbol in template.
 * @type {String}
 */
TemplateElementBase.prototype._leftBraceSymbol_ = '{';

/**
 * Render template by template file
 * @param {String} templateFile
 * @param {Function} callback
 */
TemplateElementBase.prototype.renderByFile = function (templateFile, callback) {

	var self = this;
	fs.readFile(templateFile, function (error, data) {
		if (error) throw error;

		callback(mustache.to_html(data.toString(), self));
	});
};

/**
 * Render template by template string
 * @param {String} templateString
 * @param {Function} callback
 */
TemplateElementBase.prototype.renderByString = function (templateString, callback) {

	callback(mustache.to_html(templateString, this));
};