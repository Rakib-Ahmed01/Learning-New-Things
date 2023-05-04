// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(a: string | string[][], b: string | string[][]) {
	if (a.length !== b.length) return false;

	return JSON.stringify(a) === JSON.stringify(b);
}

[
	[[], []],
	[[["a"]], [[]]],
	[[[]], [["a"]]],
	[[["a"]], [["a"]]],
	[[["a"]], [["c"]]],
	[[["a", "c"]], [["a", "c"]]],
].map((arrs) => {
	console.log(deepEquality(arrs[0], arrs[1]));
});
