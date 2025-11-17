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

const users = [
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
