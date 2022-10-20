function groupAnagrams(strs) {
  let objects = {};
  for (let str of strs) {
    let sortedKey = str.split('').sort().join('');
    if (!objects[sortedKey]) {
      objects[sortedKey] = [str];
    } else {
      objects[sortedKey].push(str);
    }
  }
  return Object.values(objects);
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
