
var obj = {
    a: {
            b: {
                 c: 12,
                 j: false
               },
            k: null
       }
 };

console.log(obj["a"]["k"]);

 function writePath(){

    let str = "a.k"
    let arr = str.split(".");
    console.log("ln 17:", arr);
    for (let i=0; i<arr.length; i++){
        if (obj[arr[i]]!==undefined){
            obj = obj[arr[i]]
        }
      else{
    return undefined;}
       } return obj;
    }
 console.log(writePath());