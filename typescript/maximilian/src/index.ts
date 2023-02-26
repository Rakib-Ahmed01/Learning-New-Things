console.log('Bismillah...');

const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const btn = document.getElementById('btn');

function add(a: number, b: number) {
  console.log(+a + +b);
}

btn?.addEventListener('click', () => {
  add(+input1.value, +input2.value);
});
