var obj = {
    a : "first",
    b : "second",
    c : "null",
}

// var json_01 = JSON.stringify(obj);
// console.log(typeof (json_01));
// console.log("ln09:",json_01);


// var json_02 = JSON.parse(JSON.stringify(obj));
// console.log("ln13:",json_02);
// console.log(typeof(json_02));


// var str_01 = "a.b.c"
// console.log(str_01);
// console.log("ln 19:",typeof(str_01))

// var str_02 = JSON.parse(str_01);
// console.log(str_02);
// console.log(typeof(str_02));




let str = 'a.b.c'
console.log(typeof(str));

let d = [...str]
console.log(d);
console.log(typeof(d));
// for (let i = 0; i < d.length; i++) {
//   temp = {temp , d[i]}
// }