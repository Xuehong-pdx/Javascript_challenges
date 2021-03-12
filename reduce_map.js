nums=[1,2,6,5]
const result= nums.reduce((x, y) => {
  return x*y }, 1);

const items = nums.map(n => '<li>'+ n + '</li>')
const html = '<ul>'+items.join('')+'</ul>'
console.log(items)
console.log(html)

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [58, "Microphone"]
];

items1 = Object.assign(...curInv.map(([v, k]) => ({ [k]: v })));
console.log('item1:', items1)

//const dic = nums.map(n=> {
//  return {value:n};
//})

const dic = nums.map(n=> ({value:n}))
console.log(dic)

const mul = nums.map(n=> {
  return n*3;
})

console.log(mul)

const item = nums
  .filter(n =>n>=0)
  .map(n => ({value:n}))
  .filter(obj => obj[1]>2);
