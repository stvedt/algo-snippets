// https://leetcode.com/problems/defanging-an-ip-address/

const address = "1.1.1.1";

// My approach
let defangIPaddr = function (address) {
  let addressArr = address.split(".");
  let newAddr = "";
  for (let i = 0; i < addressArr.length; i++) {
    newAddr += addressArr[i];
    if (i < addressArr.length - 1) newAddr += "[.]";
  }
  return newAddr;
};

// first approach str.replace('.', '[.]'); only replaces first occurrence regex solves

let defangIPaddr2 = function (address) {
  return address.replace(/[.]/gi, "[.]");
};

let defangIPaddr3 = function (address) {
  return address.split(".").join("[.]");
};

// using characters
let defangIPaddr4 = function (address) {
  let newAddr = "";
  for (c of address) {
    if (c === ".") {
      newAddr += "[.]";
    } else {
      newAddr += c;
    }
  }
  return newAddr;
};
