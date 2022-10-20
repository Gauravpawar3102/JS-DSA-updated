function topKFrequent(arr, k) {
  let objects = {};
  let freq = 0;
  for (i = 0; i < arr.length; i++) {
    if (objects[arr[i]] == undefined) {
      objects[arr[i]] = [freq + 1];
    } else {
      objects[arr[i]] + freq++;
    }
  }
  //   for (j = 0; j < Object.keys(objects).length; j++) {}
  console.log(objects);
  //   console.log(Object.values(objects).sort());
  //   console.log(Object.values(objects).sort());
  //   console.log(Math.max(0, Object.values(objects)));
  //   console.log(Object.keys(objects).sort().slice(0, k));
}
topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
