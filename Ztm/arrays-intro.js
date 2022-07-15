const strings = ['a', 'b', 'c', 'd'];

// 4*4 = 16 bytes of storage in 32 bit

// * Javascript Array Methods

strings.push('e'); //0(1)
strings.pop(); //0(1) .

strings.unshift('x'); //0(n) -b'cause we are assigning on 0th index  by looping and changing all indexes from 0
strings.splice(2, 0, 'alien'); //0(n/2)==>0(n)

console.log(strings);
