console.log('Bismillah...');

type StringArray = Array<number>;

type Box<T> = {
  value: T;
};

type BoxString = Box<string>;

const boxStr: BoxString = { value: 'foo' };

type MyArray<T> = {
  [index: number]: T;
};

const myArray: MyArray<number> = [1, 2, 3, 4, 5];

console.log(myArray);

type MyObject<Type> = {
  [key: string]: Type;
};

const obj: MyObject<{ name: string; age: number }> = {
  rakib: { name: 'Rakib', age: 20 },
};

console.log(obj['rakib']);

function add(a: string, c: string, b?: string | undefined) {
  if (!c) {
    return a + b;
  }
  return a + b + c;
}

console.log(add('1', '2', '3'));
console.log(add('1', '2', undefined));
