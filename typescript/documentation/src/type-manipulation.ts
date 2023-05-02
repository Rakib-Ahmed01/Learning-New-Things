// Generic
function identify<Type>(param: Type): Type {
  return param;
}
identify([1, 2, 3]);

// typeof
let s = 'hello';
let n: typeof s = '22';

type Predicate = (x: string) => string;
type K = ReturnType<Predicate>;

function f() {
  return { x: 1, y: 2 };
}

type F = ReturnType<typeof f>;

const num: F = {
  x: 1,
  y: 2,
};

// Indexed Access Types
type Person = { name: string; age: number };
type Age = Person['age'];

const arrayOfUsers = [
  { name: 'John', age: 20 },
  { name: 'Rakib', age: 20 },
];

type User = (typeof arrayOfUsers)[number];

// Mapped Types
interface Persona {
  name: string;
  age: number;
  email: string;
}

type PartialPersona = { [Key in keyof Persona]?: Persona[Key] };
