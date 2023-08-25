import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';

const numsOfCpus = cpus().length;

if (cluster.isPrimary) {
  console.log(`Master process id: ${process.pid}`);

  for (let i = 0; i < numsOfCpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`, { code, signal });
  });
} else {
  http
    .createServer((_, res) => {
      res.writeHead(200);
      res.end(
        `Hello, Node.js Cluster! Process id ${process.pid}. Master Process is ${process.ppid}`
      );
    })
    .listen(8000, () => {
      console.log(
        `server is listening on port ${8000} on process id ${
          process.pid
        } master id ${process.ppid}`
      );
    });
}
