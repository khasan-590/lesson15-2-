"use strict";


class First {
  constructor(hello){
    this.hello = hello;
  }
  
  sayhello () {
    return  this.hello;
  }
}

class Second extends First {
  constructor(hello){
    super(hello);
  }
  sayAfter (){
    return this.hello;
  }
}

const item1 = new First('"Привет я метод родителя!"');
const item2 = new Second('"А я наследуемый метод!"');

console.log(item1.sayhello());
console.log(item2.sayhello());