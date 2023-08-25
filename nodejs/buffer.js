const buff = Buffer.alloc(16);

buff.write('this is a buffer');

console.log(buff, buff.toString(), buff.toJSON());
