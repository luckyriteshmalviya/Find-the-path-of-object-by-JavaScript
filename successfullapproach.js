/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
             a: {
                     b: {
                          c: 12,
                          j: false
                        },
                     k: null
                }
          };

// The Answer should :       
// console.log(findPath(obj, 'a.b.c'));       // 12
// console.log(findPath(obj, 'a.b'));         // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d'));       // undefined
// console.log(findPath(obj, 'a.c'));         // undefined
// console.log(findPath(obj, 'a.b.c.d'));     // undefined
// console.log(findPath(obj, 'a.b.c.d.e'));   // undefined
// console.log(findPath(obj, 'a.b.j'));       // false
// console.log(findPath(obj, 'a.b.j.k'));     // undefined
// console.log(findPath(obj, 'a.k'));         // null


/**
 * Create a function with two parameters (obj, path)                                    // for ex. :- (obj, a.b.c)
 * Remove the (.) from path with the help of split and make a new variable as (arr).    // a b c
 * Create a loop and if-else condition inside the loop.
 * If the index valur of object is not equal to undefined then modify obj with new valur of    
   arr.                                                                                 // obj = obj[arr[i]]
 * Otherwise return undefined.                                                          // else (undefined)
 * Now return the function with the value of obj.                                       // return obj
 */


function findPath(obj, path){

  let arr = path.split(".");
  for (let i=0; i<arr.length; i++){
      if (obj[arr[i]]!==undefined){
          obj = obj[arr[i]]
      }
    else{ return }
     } return obj;
  }

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null


