const FP = require('mini-functional-library');

const f1 = (val) => {
	return val * 2;
};
const f2 = (val) => {
	return val + 3;
};
const f3 = (val) => {
	return val - 2;
};
const cmp = FP.compose(f1, f2, f3);
let value1 = cmp(2);

const ppe = FP.pipe(f3, f2, f1);
let value2 = ppe(2);

const unary = FP.unary((one, two) => {});
let length1 = unary.length;

const binary = FP.binary((one, two, three) => {});
let length2 = binary.length;

const partial = FP.partial(function(x, y) {
	return x + y;
}, 10);
let partial2 = partial(2);

const trampoline = FP.trampoline(function f(sum, num, ...nums) {
	sum += num;
	if (nums.length == 0) return sum;
	return function() {
		return f(sum, ...nums);
	};
});
let trampVal = trampoline(1, 2, 3, 4, 5);//15
