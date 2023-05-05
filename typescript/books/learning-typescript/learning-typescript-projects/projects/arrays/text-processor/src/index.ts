// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
	const { width, align = "left" } = options;

	return texts.map((text) => {
		if (text.length === 0 && width === 0) {
			return [""];
		}

    const 
	});
}

console.log(
	alignTexts([""], {
		width: 0,
	})
);
