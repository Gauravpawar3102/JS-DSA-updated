// ? Fibonnaci series

function fibo(n) {
  let result;
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 1; i <= n; i++) {
    result = a + b;
    console.log(result);
    a = b;
    b = result;
  }
}
fibo(5);
