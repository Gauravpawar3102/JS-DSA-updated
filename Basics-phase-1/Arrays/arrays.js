// ?Filter

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const filteredItems = items.filter((item) => {
//   return item.price < 100;
// });
// console.log(filteredItems);

// ?Map

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const mappedItems = items.map((item) => {
//   return item.price;
// });
// console.log(mappedItems);

// ?Find

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const findItem = items.find((item) => {
//   return item.price === 100;
// });
// console.log(findItem);

// ?forEach

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// items.forEach((item) => {
//   console.log(item.name);
// });

// ?Some //returns true (or) false if some items in an array obeys the condition

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const hasInexpensiveItems = items.some((item) => {
//   return item.price <= 100;
// });

// console.log(hasInexpensiveItems);

// ?every//returns true (or) false if every items in an array obeys the condition

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const hasInexpensiveItems = items.every((item) => {
//   return item.price <= 10000;
// });

// console.log(hasInexpensiveItems);

// ?Reduce//iterates on each item and can perfom operations between current item and previous item

// const items = [
//   { name: 'bike', price: 100 },
//   { name: 'tv', price: 15 },
//   { name: 'bicycle', price: 12 },
//   { name: 'motor', price: 102 },
//   { name: 'nike shoes', price: 1030 },
//   { name: 'bookShelf', price: 1020 },
//   { name: 'keyboard', price: 1040 },
//   { name: 'pen', price: 10 },
// ];
// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);

// console.log(total);

// ?Includes//returns true or false if the array includes the given item
const items = [1, 2, 3, 4, 5];
const includesTwo = items.includes(7);

console.log(includesTwo);
