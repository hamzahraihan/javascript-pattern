// only works on typescript

function revEngine() {
  return 'engine goes boom';
}

function first() {
  console.log('first(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): called');
  };
}

class Car {
  doors: string;
  engine: string;
  color: string;
  constructor(doors: string, engine: string, color: string) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
  @first()
  method() {}
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
