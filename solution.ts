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

type GetLength = string | any[];
const getLength = (getLengthValues: GetLength) => {
  if (typeof getLengthValues === "string") {
    return getLengthValues.length;
  } else if (Array.isArray(getLengthValues)) {
    return getLengthValues.length;
  }
};

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

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (item: Item[]): Item[] => {
  const filteredResult = item.filter((item) => item.rating >= 4);
  return filteredResult;
};

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

type TotalPrice = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (items: TotalPrice[]): number => {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const product = items[i];

    const discountAmount = product.discount
      ? (product.price * product.discount) / 100
      : 0;

    totalPrice =
      totalPrice + (product.price - discountAmount) * product.quantity;
  }

  return totalPrice;
};