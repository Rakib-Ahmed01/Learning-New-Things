console.log('Bismillah...');

function log<T>(arg: T) {
  console.log(arg);
  return arg;
}

const result = log('this is a test');

const x = result.replace('test', 'best');

console.log(result, x);
log([1, 2, 3, 4, 5]);

interface Age {
  age: number;
}

function getOldest<T extends Age>(people: T[]) {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: Age[] = [{ age: 40 }, { age: 50 }, { age: 30 }];

console.log(getOldest(people));

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { age: 40, name: 'Rakib' },
  { age: 50, name: 'Rakib' },
  { age: 30, name: 'Rakib' },
];

const oldestPlayer = getOldest(players);

console.log(oldestPlayer.name);

interface Name {
  name: string;
}

interface User extends Name {
  email: string;
  id: number;
}

// const user: User = {
//   name: 'Rakib',
//   id: 1,
//   email: 'rakib@gmail.com',
// };

interface IPost {
  title: string;
  body: string;
  id: number;
}

interface IUser {
  name: string;
  email: string;
  id: number;
}

const fetchPosts = async (path: string): Promise<IPost[]> => {
  const res = await fetch(`https://api.com/${path}`);
  return res.json();
};

const fetchUsers = async (path: string): Promise<IUser[]> => {
  const res = await fetch(`https://api.com/${path}`);
  return res.json();
};

const fetchData = async <T>(path: string): Promise<T[]> => {
  const res = await fetch(`https://api.com/${path}`);
  return res.json();
};

// (async () => {
//   const posts = await fetchPosts('posts');
//   const users = await fetchUsers('users');
//   const users2: IUser[] = await fetchData<IUser>('users2');
//   const posts2 = await fetchData<IPost>('posts');
//   users[0];
//   posts[0];
//   users2[0];
//   posts2[0];
// })();

interface ICredentials {
  email: string;
  password: string;
  isAdmin: boolean;
}

function login(credentials: ICredentials) {
  console.log(credentials);
  return credentials;
}

const user = {
  password: 'user',
  email: 'user@example.com',
  isAdmin: false,
};

const result2 = login(user);
console.log(result2.isAdmin);
