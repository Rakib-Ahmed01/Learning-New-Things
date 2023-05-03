// Write your Bird type here! ✨

type Bird = {
	name: string;
	diet: "omnivore" | "carnivore";
	intelligent?: boolean;
	dangerous?: boolean;
	noisy?: boolean;
};

export const birds: Bird[] = [
	{
		dangerous: true,
		diet: "omnivore",
		name: "White-Throated Magpie-Jay",
		noisy: true,
	},
	{
		diet: "omnivore",
		intelligent: true,
		name: "Eurasian Magpie",
	},
	{
		diet: "carnivore",
		name: "Yellow-Billed Blue Magpie",
		noisy: true,
	},
	{
		name: "American Crow",
		diet: "omnivore",
		intelligent: true,
	},
];
