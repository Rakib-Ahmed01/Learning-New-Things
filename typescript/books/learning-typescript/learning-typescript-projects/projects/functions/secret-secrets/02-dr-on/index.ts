// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type CipherFunction = (char: string) => string;

export function createAdvancedCipher(
	onVowel: CipherFunction,
	onConsonant: CipherFunction,
	onPunctuation: CipherFunction
) {
	return (text: string): string => {
		let result = "";

		for (let char of text) {
			const vowelRegex = /[aeiou]/i;
			const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;

			if (vowelRegex.test(char)) {
				result += onVowel(char);
			} else if (consonantRegex.test(char)) {
				result += onConsonant(char);
			} else {
				result += onPunctuation(char);
			}
		}

		return result;
	};
}
