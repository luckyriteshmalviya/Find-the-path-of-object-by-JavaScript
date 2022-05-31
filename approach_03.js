let input = "[{(])}";
let pair = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
let stack = [];
console.log("ln08:",stack);
for (let i = 0; i < input.length; i++) {
  stack += input[i];
  console.log("ln10:",stack);
  if ((stack = pair[0])) {
    stack.pop(pair[0]);
    console.log("ln13:",stack);
  } else if ((stack = pair[1])) {
    stack.pop(pair[1]);
    console.log("ln16:",stack);
  } else if ((stack = pair[2])) {
    stack.pop(pair[2]);
    console.log("ln19:",stack);
  }
}
stack.length == 0 ? console.log("True") : console.log("False");