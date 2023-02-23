console.log('Bismillah...');

// primitive values - number, string, boolean
// union type and type infer in ts

let nam = 'Rakib';

const myName = 'Rakib';

let arr = ['string', 123, true, ['string', 123, true], null];

arr.push(null);

console.log(arr);

// let age: number | string = 54;

// age = '54';

let hasGf = false;

// array and tuple
let players = ['Messi', 'Ronaldo'];

players.push('Neymar');

const newPlayers = players.map((player, idx) => `${idx + 1}. ${player}`);

console.log(players, newPlayers);

// let tuple: (string | number | boolean)[] = ['string', 34, true];
let tuple: [string, number, boolean] = ['string', 34, true];

// tuple[0] = 50;

let arr2: (string[] | number[])[];

// object type

type Player = {
  name: string;
  age: number;
  // readonly age: number;
  isMarried: boolean;
  clubs?: string[];
};

let player: Player;

player = {
  name: 'Rakib',
  age: 20,
  isMarried: false,
  clubs: ['Barcelona'],
};

player.isMarried = true;

player.age = player.age + 5;

// player.country = 'Bangladesh';
player?.clubs?.forEach((club) => console.log(club));

console.log(player);

// enum

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

console.log(Color);

let red: Color = Color.Red;

console.log(red);

enum Configs {
  API_Key = 'api_key',
  Domain_Name = 'domain_name',
  Port = 'port',
}

console.log(Configs.Port);

// function type - return, parameter, anonymous, callback
// funtion signature, optional, default parameter

// add(a: number, b: number): number
function addition(a: number = 0, b: number = 0, c: number = 0) {
  // return c ? a + b + c : a + b;
  return a + b + c;
}

console.log(addition(5, 6));

// anonymous function
const log = (anything: any) => {
  console.log(anything);
};

// callback function
function calculate(
  a: number,
  b: number,
  operation: (a: number, b: number) => number
): number {
  const result = operation(a, b);
  return result;
}

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  return a / b;
}

const sum = calculate(6464, 6464, add);

console.log(sum);

// day time enum
enum timeOfDay {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  Night = 'Night',
}

// function signature
let greet: (personName: string, timeOfDay: timeOfDay) => string;

greet = function (personName: string, timeOfDay: timeOfDay) {
  return `Good ${timeOfDay}, Mr. ${personName}...`;
};

console.log(greet('Rakib', timeOfDay.Afternoon));

// Type Aliases

type Name = 'Rakib' | 'Rakib Ahmed';

let myName2: Name = 'Rakib';

console.log(myName2.toUpperCase());

type StringArray = string[];

const strArr: StringArray = [];

strArr.push('Rakib');

console.log(strArr);

// Tuple Example
type TupleArrarType = [string, number];

const tupleArr: TupleArrarType = ['Rakib', 20];

const [myname, age] = tupleArr;

console.log({ myname, age });

type Address = {
  parmanentAddress: string;
  presentAddress: string;
};

type Favourite = {
  type: 'food' | 'color' | 'place' | 'player';
  value: string;
};

type Person = {
  name: string;
  age: number;
  phone: string | string[];
  address: Address;
  favourites: Favourite[];
};

const person: Person = {
  name: 'Rakib',
  age: 20,
  phone: '01910492298',
  address: { parmanentAddress: 'Kushtia', presentAddress: 'Kushtia' },
  favourites: [
    { type: 'color', value: 'black' },
    { type: 'food', value: 'beef' },
  ],
};

console.log(person);

const name2: Person['name'] = 'Rakib';
const myage: Person['age'] = 22;
