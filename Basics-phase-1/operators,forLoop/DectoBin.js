const { faPowerOff } = require('@fortawesome/free-solid-svg-icons');

function DectoBin(n) {
  let ans = 0;
  let i = 0;
  while (n != 0) {
    let bit = n & 1;
    console.log(bit);
    ans = bit * Math.pow(10, i) + ans;
    n = n >> 1;
    i++;
  }
  console.log(' ans is ' + ans);
  console.log(2 << 2);
}
DectoBin(100000);
