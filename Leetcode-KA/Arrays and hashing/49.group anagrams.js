function groupAnagrams(strs) {
  let objects = {};

  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    //aet
    if (objects[sorted] === undefined) {
      objects[sorted] = [str];
    } else {
      objects[sorted].push(str);
    }
  }
  console.log(Object.values(objects));
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
