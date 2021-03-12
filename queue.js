class Queue {
  constructor(arr){
    this._arr = arr;
  }
  enqueue (val) {
    this._val = val;
    this._arr.push(this._val);
    return this._arr
  }
  dequeue() {
    return this._arr.shift();
  }
  front() {
    return this._arr[0];
  };
  size () {
    return this._arr.length;
  };
  isEmpty () {
    return this._arr.length === 0;
  };
}

q = new Queue([1,2,3])
console.log(q.size())
console.log(q.enqueue(5))
console.log(q.size())
