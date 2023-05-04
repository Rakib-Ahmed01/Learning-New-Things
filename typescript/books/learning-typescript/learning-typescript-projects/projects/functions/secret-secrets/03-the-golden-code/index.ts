// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type CipherOptions = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(options: CipherOptions) {
	return (text: string) => {
		const { attempts, makeGuess, validateGuess } = options;

		for (let attempt = 1; attempt <= attempts; attempt++) {
			const guess = makeGuess(text, attempt);

			if (validateGuess(guess)) {
				return guess;
			}

			return undefined;
		}
	};
}
