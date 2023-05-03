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

function isUser(user: User | Person): user is User {
  return (user as User).email !== undefined && (user as User).id !== undefined;
}

if (isUser(user1)) {
  console.log('user1 is User');
} else {
  console.log('user1 is person');
}
