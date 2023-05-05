// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

import { characters } from "./characters";

interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(stringifiedCharacter: string) {
	const character = JSON.parse(stringifiedCharacter) as Character;

	console.log(`I am ${character.name}.`);
	console.log(`My powers are: ${character.powers.join(", ")}.`);
	console.log(`I am ${character.side}.`);
}

announceCharacter(characters[2]);
