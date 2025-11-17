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
// console.log(getResult.getDetails());

// PROBLEM 04

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (item: Item[]): Item[] => {
  const filteredResult = item.filter((item) => item.rating >= 4);

  return filteredResult;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.9 },
  { title: "Book C", rating: 5.0 },
];
// console.log(filterByRating(books));
// console.log(books)

//  PROBLEM 05

type ActiveUsers = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (user: ActiveUsers[]): ActiveUsers[] => {
  const activeUsers = user.filter((activeUser) => activeUser.isActive === true);

  return activeUsers;
};

const users: ActiveUsers[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: false },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

// PROBLEM 06

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availableBook = book.isAvailable === true ? "Yes" : "No";

  const bookAuthorInfo = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableBook}`;

  console.log(bookAuthorInfo);
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

printBookDetails(myBook);

// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

// PROBLEM 07

type UniqueValuse = string | number;

const getUniqueValues = (
  arr1: UniqueValuse[],
  arr2: UniqueValuse[]
): UniqueValuse[] => {
  const storeResult: UniqueValuse[] = [];

  const addIfNotExist = (values: UniqueValuse) => {
    let isExist = false;

    for (let i = 0; i < storeResult.length; i++) {
      if (storeResult[i] === values) {
        isExist = true;
        return;
      }
    }

    if (!isExist) {
      storeResult.push(values);
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    addIfNotExist(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    addIfNotExist(arr2[i]);
  }

  return storeResult;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = ["1", "2", "3", "4", "5"];
const array4 = ["3", "4", "5", "6", "7"];
console.log(getUniqueValues(array3, array4));

// PROBLEM 08

type TotalPrice = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (items: TotalPrice[]): number => {};

const products: TotalPrice[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
