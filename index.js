const crypto = require('crypto');

console.log("====================================");

const NUM_REQ = 4; // use 2, 4, 8 and see the difference

const tic = performance.now();

for (let i = 0; i < NUM_REQ; i++) {
  const tic = performance.now();
  // crypto.pbkdf2Sync('secret', 'salt', 300000, 512, 'sha512');
  crypto.pbkdf2('secret', 'salt', 300000, 512, 'sha512', () => {
    const tok = performance.now();
    console.log(tic);
    console.log(tok);
    console.log(`inside tictok ${tok - tic} ms`);
  });
}

const tok = performance.now();
console.log(`outside tic tok ${tok - tic} ms`);

// function febonacci(n) {
//   return (
//     n < 1 ? 1
//       : n <= 2 ? 1
//         : febonacci(n - 1) + febonacci(n - 2)
//   );
// }

// const doFib = (n) => {
//   const tic = performance.now();
//   febonacci(n);
//   const tok = performance.now();
//   console.log(`time taken to doFib ${tok - tic} ms`);
// };

// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);
// setTimeout(() => doFib(40), 0);


// const promisedFeb = async () => {
//   await ;
// };

// const promisedFebRunner = async () => {
//   const tic = performance.now();
//   await Promise.all([
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//     Promise.resolve().then(() => doFib(40)),
//   ]);
//   const tok = performance.now();
//   console.log(`time taken to run all ${tok - tic} ms`);
// };
// promisedFebRunner();


console.log("====================================");