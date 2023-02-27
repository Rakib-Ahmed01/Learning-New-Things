type GreetFn = (greet: string, name: string) => void;

function greeter(fn: GreetFn) {
  fn(`Assalamualaikum`, 'Rakib Ahmed');
}

function log(greet: string, name: string) {
  console.log(`${greet}, ${name}...`);
}

greeter(log);

function firstElement<Type>(arr: Type[]): arr is Type[] {
  return arr[0] !== undefined;
}

const s = firstElement<string>([]);

console.log(s);

function myForEach<Type>(
  arr: Type[],
  cb: (arg: Type, arr: Type[], index?: number) => void
) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], arr, i);
  }
}

myForEach([1, 2, 3, 4], (item, idx, arr) => {
  console.log(item, arr, idx);
});

myForEach(['Rakib', 'Sabbir', 'Arif', 'Yeakib'], (name, idx, names) => {
  console.log(name, names?.toFixed(), idx);
});
