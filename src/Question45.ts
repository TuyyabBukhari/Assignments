/*Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.*/
interface Car1 {
    manufacturer: string;
    model: string;
    [key: string]: string;
  }
  
  function createCar(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    const car: Car1 = { manufacturer, model };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  const myCar = createCar("Toyota", "Camry",  ["color","black"]);
  console.log(myCar)