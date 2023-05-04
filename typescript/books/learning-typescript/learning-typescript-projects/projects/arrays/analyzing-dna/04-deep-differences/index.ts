// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) return [];

	// let result: (string | undefined)[] | (string | undefined)[][];

	const result = a.map((elem, i) => {
		if (elem.length !== b[i].length) return undefined;

		return elem.map((elem, j) => {
			return elem === b[i][j] ? elem : undefined;
		});
	});

	return result;
}

[
	[[], []],
	[[["a"]], [[]]],
	[[[]], [["a"]]],
	[[["a"]], [["a"]]],
	[[["a"]], [["c"]]],
	[[["a", "c"]], [["a", "c"]], [["a", "c"]]],
	[
		[["a"], ["c"]],
		[["a"], ["g"]],
	],
	[
		[["a"], ["c"]],
		[["g"], ["c"]],
	],
].map((arrs) => {
	console.log(deepDifferences(arrs[0], arrs[1]));
});
