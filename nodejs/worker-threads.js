import { Worker, isMainThread } from 'worker_threads';

if (isMainThread) {
  const worker = new Worker('./complex-computation.js');

  worker.on('message', (result) => {
    console.log({ result });
  });

  worker.postMessage(9999999);
}

console.log('end');
