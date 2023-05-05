// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

interface Coordinates {
	north: [number, number, number];
	west: [number, number, number];
}

interface City {
	coordinates: Coordinates;
	name: string;
	catchphrase?: string;
}

export default function describeCity(city: City) {
	const latitude = `${city.coordinates.north[0]}°${city.coordinates.north[1]}'${city.coordinates.north[2]}"N`;
	const longitude = `${city.coordinates.west[0]}°${city.coordinates.west[1]}'${city.coordinates.west[2]}"W`;
	const formattedCoordinates = `${latitude} ${longitude}`;

	return `${city.name}\n* "${city.catchphrase}"\n* Located at ${formattedCoordinates}`;
}
