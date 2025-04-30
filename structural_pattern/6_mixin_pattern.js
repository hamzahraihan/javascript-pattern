class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'Grey');
      case 'honda':
        return new Car(2, 'V8', 'red');
    }
  }
}

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case 'cx5':
        return new SUV(4, 'V6', 'Grey');
      case 'sante fe':
        return new SUV(2, 'V8', 'red');
    }
  }
}
// add mixin
let carMixin = {
  revEngine() {
    console.log(`the ${this.engine} is doing vroom vroom`);
  },
};

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManuFacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model);
    case 'suv':
      return suvFactory.createCar(model);
  }
};

Object.assign(Car.prototype, carMixin);

const honda = autoManuFacturer('car', 'honda');

honda.revEngine();
