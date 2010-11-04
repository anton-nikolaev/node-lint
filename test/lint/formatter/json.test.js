var vows = require('vows');
var assert = require('assert');
var formatter = require('../../../lib/lint/formatter/json');

function createFormatter(options) {
	return new formatter.Formatter(options);
}

function createReport() {
	return [
		{
			file : 'foo',
			error: {
				character: 'c',
				evidence: 'e',
				line: 'l',
				reason: 'r'
			}
		}
	];
}

var FormatterTest = vows.describe('Formatter class').addBatch({
	"format()" : {
		topic : function (item) {
			return createFormatter();
		},
		'should return format empty data' : function (topic) {
			assert.equal(topic.format([]), '[]');
		},
		'should return format simple data' : function (topic) {
			assert.equal(topic.format(createReport()), '[{"file":"foo","error":{"character":"c","evidence":"e","line":"l","reason":"r"}}]');
		}
	}
});

exports.FormatterTest = FormatterTest;