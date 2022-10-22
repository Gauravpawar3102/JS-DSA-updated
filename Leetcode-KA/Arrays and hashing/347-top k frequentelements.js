function topKFrequent(arr, k) {
  let objects = {};
  for (i = 0; i < arr.length; i++) {
    let freq = 0;
    if (objects[arr[i]] == undefined) {
      objects[arr[i]] = 1;
    } else {
      objects[arr[i]] = objects[arr[i]] + 1;
    }
    // !TECH DOSE
  }
  // numArray.sort((a, b) => a - b); //? For ascending sort
  // numArray.sort((a, b) => b - a); //? For descending sort
  //   for (j = 0; j < Object.keys(objects).length; j++) {}
  console.log(objects);
  console.log(Object.keys(objects));
  console.log(Object.keys(objects).sort((a, b) => objects[b] - objects[a]));
  console.log(
    // a is current element b is next element in objects according to keys and values of objects{}
    Object.keys(objects)
      .sort((a, b) => objects[b] - objects[a])
      .slice(0, k)
      .sort()
  );
  //   console.log(Object.values(objects).sort());
  //   console.log(Math.max(0, Object.values(objects)));
  //   console.log(Object.keys(objects).sort().slice(0, k));
}
topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
// resources :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects
