// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

export default function shallowEquality(a: string[], b: string[]) {
	return JSON.stringify(a) === JSON.stringify(b);
}

console.log(shallowEquality(["a", "c", "g", "t"], ["a", "c", "g", "t"]));
