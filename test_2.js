'use strict';
class A{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    cong(){
        return this.x + this.y
    }
}

class B extends A {
    tru(){
        return this.x - this.y;
    }
}

class C extends B {
    nhan(){
        return this.x*this.y;
    }
}

const a = new C(20,10);
console.log(a.cong());
console.log(a.tru());
console.log(a.nhan());
