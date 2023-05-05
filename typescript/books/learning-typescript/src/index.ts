let something;
//     ^?

something = 'something' as const;
// ^?

something.toUpperCase();
// ^?

something = 12345;
// something.toUpperCase(); // Cannot do it

export const country = 'Bangladesh';

// const firstName: string = null;

// Structural Typing
type WithFirstName = { firstName: string };
type WithLastName = { lastName: string };

const hasBoth = {
  firstName: 'Rakib',
  lastName: 'Ahmed',
};

const firstName: WithFirstName = hasBoth;
const lastName: WithLastName = hasBoth;

console.log(firstName);

type User = {
  id: number;
  name: string;
  email: string;
};

type Person = {
  name: string;
  age: number;
};

let user1: User | Person = { name: 'John', age: 20, email: 'john@gmail.com' };

// const user2: User = { name: 'John', id: 1, email: 'john@gmail.com', job: 'Web Developer' }; // ERROR!!! Object literal may only specify known properties, and 'job' does not exist in type 'User'.

const user2 = {
  name: 'John',
  id: 1,
  email: 'john@gmail.com',
  job: 'Web Developer',
};

const userWithExtraProperties: User = user2;

console.log(userWithExtraProperties);

function getTheSameUser(user: User) {
  return user;
}

getTheSameUser({
  id: 1,
  name: 'John',
  email: 'john@gmail.com',
  // job: 'Web Developer',
}); // Error!!
getTheSameUser(user2);

function isUser(user: User | Person): user is User {
  return (user as User).email !== undefined && (user as User).id !== undefined;
}

if (isUser(user1)) {
  console.log('user1 is User');
} else {
  console.log('user1 is person');
}

// Union Types
type Student = {
  name: string;
  roll: number;
  subject?: string;
  // subject: string | undefined
};

const student1: Student = { roll: 1, name: 'John' };
