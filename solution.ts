// PROBLEM 1
type FormatValue = string | number | boolean;

const formatValue = (values: FormatValue): FormatValue => {
  if (typeof values === "string") {
    return values.toUpperCase();
  } else if (typeof values === "number") {
    return values * 10;
  } else {
    return values === true ? false : true;
  }
};
// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));

// PROBLEM 02
type GetLength = string | any[];

const getLength = (getLengthValues: GetLength) => {
  if (typeof getLengthValues === "string") {
    return getLengthValues.length;
  } else if (Array.isArray(getLengthValues)) {
    return getLengthValues.length;
  }
};
// console.log(getLength(["Zobayer", 1, true, false, undefined, null]));
// console.log(getLength("zobayer hosen"))


// PROBLEM 03

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
const getResult = new Person("Zobayer Hosen", 21);
console.log(getResult.getDetails());
