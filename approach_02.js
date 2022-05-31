// let str="helloworld";
// var res = function convertToVariable(str){
//     var newValue = "newhelloworld";
//   eval("var "+ str +" = " + "'" + newValue + "'");
// console.log(helloworld);// newhelloworld
// };
// console.log(res(str));



var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

    const findPath = (object, path) => {
    console.log("ln 30:",typeof(path))
    const paths = path.split('');
    console.log("ln 31:",paths);
    console.log(typeof(paths));
    obj = obj + "." 
    for(let i=0; i<paths.length; i++) {
         obj = obj[paths[i]];
        console.log("Loop",[i],obj)
    }
    return obj;
};

console.log(findPath(obj, "a.b.c"));