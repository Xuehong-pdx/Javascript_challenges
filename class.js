class Rect {
    constructor(w, h) {
      this._w = w;
      this._h = h;
    }
    get area() {
      return this._w * this._h
    }
  }
  let rec = new Rect(3,4);
  console.log(rec._w,'*', rec._h, '=', rec.area);
  
  ///////////////////////////////////////////
  let square = class {
    constructor(w){
      this._w=w
    }
    get area() {
      return this._w * this._w
    }
    set area(val) {
      this._w = Math.sqrt(val);
    }
  }
  let sq = new square(4)
  console.log(sq.area);
  sq.area=36;
  console.log('new width =', sq._w);
  /////////////////////////////////////////////
  let circle = class Circle{
    constructor(r){
      this._r = r
    }
    get area() {
      return 2*3.14*this._r^2
    }
  }
  cir = new circle(4)
  console.log('area of the circle =', cir.area)
  