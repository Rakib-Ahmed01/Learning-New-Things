import os from 'node:os';
import util from 'util';
util.inspect.defaultOptions.depth = null;

for (let key in os) {
  if (typeof os[key] === 'function') {
    console.log({ [key]: os[key]() });
  }
}

export default 5;
