// problem 1
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
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(false));
