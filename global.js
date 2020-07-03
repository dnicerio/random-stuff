let countUp = 1;

setTimeout(() => {
  console.log('Timeout!!');
  clearInterval(int);
}, 6000);

const int = setInterval(() => {
  console.log(`${countUp++} Intervals`)
}, 1000);

int;

console.log(__dirname);
console.log(__filename);