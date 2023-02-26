export {};
// const helloWorld = 'Hello world!';

// // interface User {
// //   name: string;
// //   id: number;
// // }

// // const user: User = {
// //   name: 'John',
// //   id: 21324,
// // };

// // function getUser(): User {
// //   return user;
// // }

// type UserRole = 'user' | 'admin' | 'super-admin' | 'super-user';

// type Rating = 1 | 2 | 3 | 4 | 5;

// const rating: Rating = 1;

// console.log(rating);

// function getLength(obj: string | Array<string>) {
//   return obj.length;
// }

// function print<T>(param): T {
//   console.log(param);
//   return param;
// }

// let x = print<number>('string');

// type User = {
//   name: string;
//   id: number;
// };

// type Post = {
//   id: number;
//   title: string;
// };

// const fetchUser = async (path: string): Promise<User> => {
//   const res = await fetch(`/api/users/${path}`);
//   return res.json();
// };

// const fetchPost = async (path: string): Promise<Post> => {
//   const res = await fetch(`/api/posts/${path}`);
//   return res.json();
// };

// async function fetchData<T>(url): Promise<T> {
//   const res = await fetch(url);
//   return res.json();
// }

// // const user = fetchData<User>('/api/users/1');

// // user.then((data) => data.name);

// // const post = fetchData<Post>('/api/posts/1');

// // post.then((data) => data.title);
// //

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}

const str = 'xyz';

console.log(str);

interface Backpack<T> {
  add: (param: T) => T;
  get: (param: T) => T;
}

const stringBackpack: Backpack<string> = {
  add: (param: string) => `Added ${param} to Backpack`,
  get: (param: string) => `Here is ${param}`,
};

console.log(stringBackpack.add('Glass'));
console.log(stringBackpack.get('Glass'));

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Brendan', new Date());
