const assert = require('assert');
describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			let arr = [ 1, 2, 3 ];
			let isIDXOf = arr.indexOf(4);
			assert.equal(isIDXOf, -1);
		});
	});
});
