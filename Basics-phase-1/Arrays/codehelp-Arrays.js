function swapAlternate(arr) {
  let result = [];
  function swap(x, y) {
    return ([x, y] = [y, x]);
  }

  //   console.log(swap(1, 2));
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      //   result.push(swap([arr[i], arr[i + 1]]));

      //   console.log(swap(arr[i], arr[i + 1]));

      result.push(swap(arr[i], arr[i + 1]));
      //   console.log(swap([arr[i], arr[i + 1]]));
      //   console.log(arr[i]);
    }
    console.log(result.flat());
  }
}
swapAlternate([1, 2, 3, 4, 4, 8]);
