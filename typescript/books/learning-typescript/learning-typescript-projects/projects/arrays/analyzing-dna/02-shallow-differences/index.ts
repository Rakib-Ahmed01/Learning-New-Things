// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const differences = a.map((str, index) => {
		return str === b[index] ? str : undefined;
	});

	return differences;
}

console.log(shallowDifferences(["a"], ["a"]));
