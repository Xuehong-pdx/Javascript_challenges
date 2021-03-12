class CircularQueue {
    /* writes to the end of a collection then begins overwriting 
    itself at the beginning of the collection */
    constructor(size) {
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      nulls=this.queue.filter(x=> x!==null)
      if (nulls.length===0) {
        this.queue[0]=item
        return item
      } else {
          for (i=0; i<this.queue.length; i++){
            if (this.queue[i]===null){
              this.queue[i]=item
              return item
            }
          }
        }
      }
    
    dequeue() {
      let before = this.queue.filter(x=> x < item)
      let after = this.queue.filter(x=> x > item)
    }
  }