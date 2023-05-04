// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

type CipherFunction = (text: string) => string;

export function createCipher(cipher: CipherFunction) {
	return (text: string) => {
		let result = "";
		for (let char of text) {
			result += cipher(char);
		}
		return result;
	};
}

// const cipherFn: CipherFunction = (char: string) => {
// 	const code = char.charCodeAt(0);
// 	if (code >= 65 && code <= 90) {
// 		// A-Z
// 		return String.fromCharCode(((code - 65 + 13) % 26) + 65);
// 	} else if (code >= 97 && code <= 122) {
// 		// a-z
// 		return String.fromCharCode(((code - 97 + 13) % 26) + 97);
// 	} else {
// 		return char;
// 	}
// };

// const decoded = createCipher(cipherFn)("Enxvo");

// console.log(decoded);
