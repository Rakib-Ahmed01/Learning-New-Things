export {};
let name: string = 'Rakib Ahmed';
let id: number = 1;
let isPassionateAboutProgramming: boolean = true;

const anything: any = {
  name,
  id,
  isPassionateAboutProgramming,
};

const arr: Array<string> = ['JS', 'React', 'Node'];

// function signature

type Fn = (a: number, b: number) => number;

const add: Fn = (a: number, b: number) => a + b;

console.log(add(5, 5));

function printId(id: number | string) {
  if (typeof id === 'number') {
    return id;
  }
  return id.toLowerCase();
}

type Animal = {
  name: string;
};

type Bear = {
  walk: boolean;
};

const bear: Bear & Animal = {
  name: 'Big Bear',
  walk: true,
};

type User = {
  name: string;
  id: number;
  role:
    | 'user'
    | { role: 'admin'; adminPassword: string }
    | { role: 'super-admin'; superAdminPassword: string };
};

const user: User = {
  id: 1,
  name: 'Rakib',
  role: { role: 'admin', adminPassword: '' },
};

const user2: User = {} as User;

console.log(user2.id);

type Name = 'Rakib' | 'Rakib Ahmed';

const nam: Name = 'Rakib Ahmed';

function handleRequest(url: string, method: 'GET' | 'POST') {
  return 'data';
}

const req = { url: 'https://example.com', method: 'GET' } as const;

handleRequest(req.url, req.method);

// type predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Bird | Fish) {
  if (isFish(pet)) {
    pet;
    return 'fish food';
  } else {
    pet;
    return 'bird food';
  }
}

const bird: Bird = {
  fly: () => {},
};

const fish: Fish = {
  swim: () => {
    return '';
  },
};

console.log(getFood(fish));

type Rakib = { name: 'Rakib' };
type Sabbir = { name: 'Sabbir' };

function isRakib(person: Rakib | Sabbir): person is Rakib {
  return person.name === 'Rakib';
}

function investigate(person: Rakib | Sabbir) {
  if (isRakib(person)) {
    person;
    return 'Person is Rakib';
  } else {
    person;
    return 'This is not Rakib';
  }
}

console.log(investigate({ name: 'Sabbir' }));

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; sideLength: number }
  | { kind: 'rect'; whateverNeeded: number };

const circle1: Shape = { kind: 'circle', radius: 5 };
