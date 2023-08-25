const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data.toString());
});

// console.log('File read finished');

// fs.writeFile('./write.txt', 'Hi, My name is Rakib', { flag: 'r+' }, (err) => {
//   if (err) {
//     console.log({ err });
//   }
// });

// fs.appendFile('./write.txt', '. What is your name?', (err) => {});

const readableStream = fs.createReadStream('./text.txt');
const writableStream = fs.createWriteStream('./write.txt');

readableStream.pipe(writableStream);

// readableStream.on('open', () => {
//   console.log('open for reading');
// });

// readableStream.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// readableStream.on('end', () => {
//   console.log('done reading');
// });
