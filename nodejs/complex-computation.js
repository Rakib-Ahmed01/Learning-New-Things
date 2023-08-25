import { parentPort } from 'worker_threads';

parentPort.on('message', (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  parentPort.postMessage(sum);
});
