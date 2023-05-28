const sum = require('../src/sum');

test('should add two numbers', () => {
  expect(sum(1, 1)).toBe(2);
});

test('toBe example', () => {
  expect(10).toBe(10);
  // expect(10).toEqual('10'); // fails
  const result = expect(0).toBeDefined();
});

test('toEqual example', () => {
  const obj = { a: 1, b: 2, c: undefined };
  const obj3 = { a: 1, b: 2, c: undefined };
  const obj2 = { b: 2, a: 1 };
  expect(obj).toEqual(obj3);
  expect(1).toEqual(1);
  // expect(10).toEqual('10');
});

test('', () => {
  return expect(Promise.resolve(1)).resolves.toBe(1);
});

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicodee.com/todos/1');
  return res.json();
}

// test('fetch a todo', async () => {
//   const todo = await fetchData();
//   expect(todo).toEqual({
//     userId: 1,
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false,
//   });
// });

// test('fetch a todo', async () => {
//   await expect(fetchData()).resolves.toEqual({
//     userId: 1,
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false,
//   });
// });

test('fetch a todo', async () => {
  await expect(fetchData()).rejects.not.toThrow();
});

test.only('only this will run', () => {
  expect(1).toBe(1);
});
