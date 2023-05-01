// Functions

// Call Signature
interface Calculator {
  (a: number, b: number): number;
  description: string;
}

const add: Calculator = (a: number, b: number) => {
  return a + b;
};
add.description = 'This function is for adding two numbers';

console.log(add(5, 5));
console.log(add.description);

interface ApiFunction<TRequest, TResponse> {
  (requestData: TRequest): Promise<TResponse>;
  url: string;
  method: 'GET' | 'POST';
}

const getUser: ApiFunction<
  { userId: number },
  { name: string; email: string; userId: number }
> = async (requestData) => {
  return {
    name: 'Rakib',
    email: 'rakib@gmail.com',
    userId: requestData.userId,
  };
};
getUser.url = 'https://api.github.com/users';
getUser.method = 'GET';

(async () => {
  const user = await getUser({ userId: 100 });
  console.log(user);
})();
