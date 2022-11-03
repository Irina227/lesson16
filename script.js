"use strict";

class First { //первый класс

    sayHello() {
      console.log(`Привет, я метод родителя!`)
    }

}

const person = new First () //присвоили классу переменную, через которую будем работать с классом
person.sayHello() //вызвали метод

class Second extends First {
  hello() {
    console.log(`А я наследуемый метод!`)
  }

}

const dev = new Second ()

console.log(dev);
dev.sayHello()
dev.hello()



