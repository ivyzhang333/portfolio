var count = function (string) {
  return string.length;
};

const myName = "John Smith";
console.log(count(myName));

var checkLength = function (string, length) {
  if (string.length > length) {
    return true;
  } else {
    return false;
  }
};

const string = "Welcome to my world";
console.log(checkLength(string, 20));
