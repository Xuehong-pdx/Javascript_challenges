class PriorityQueue {
    constructor(obj){
      this._obj = obj;
    }
    
    enqueue(item) {
      let before = this._obj.filter(x => x[1] < item[1])
      let after  = this._obj.filter(x => x[1] >= item[1])
      before.push(item)
      for (let x of after) {
        before.push(x)
      }
      this._obj = before
       return this._obj;
      }
  
    dequeue(item){
      let s  = this._obj.filter(x=> x[0] === item[0] && x[1] === item[1]);
      console.log('s=', s)
      this._obj = this._obj.filter(x => x[0] !== item[0] && x[1] !== item[1]);
      return s;
      }
  
    size () {
      return this._obj.length;
    }
  
    front() {
      return this._obj.shift();
    }
  
    isEmpty() {
      this._obj.length === 0;
    }
  }
  pq = new PriorityQueue([['kitten', 2], ['dog', 2], ['rabbit', 2]])
  console.log(pq)
  console.log(pq.size())
  console.log(pq.enqueue(['human', 1]))
  console.log(pq.size())
  console.log(pq.dequeue(['human', 1]))
  console.log(pq.size())