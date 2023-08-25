import crypto from 'node:crypto';

const unhashedToken = crypto.randomBytes(20).toString('hex');
const hash = crypto.createHash('sha512').update(unhashedToken).digest('hex');

console.log({ unhashedToken, hash });
console.log('end');
