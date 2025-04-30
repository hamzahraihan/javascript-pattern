let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      console.log(instance);
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
      console.log(instance);
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, 'V6', 'white');
const honda = new Car(2, 'V8', 'red');
console.log('this civic: ', civic);
console.log('this honda:', honda);
