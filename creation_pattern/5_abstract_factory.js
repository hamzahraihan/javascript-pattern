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

const cx5 = autoManuFacturer('suv', 'cx5');

console.log(cx5);
