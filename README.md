# Find-the-path-of-object-by-JavaScript
 Write function findPath which Should take two params: (object and path separated by dots as string) - Return the value if it exists at that path inside the object, else return undefined

## Question
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
  

![WhatsApp Image 2022-05-31 at 2 49 28 PM](https://user-images.githubusercontent.com/99033374/171145736-c257dd72-39d9-4388-96f8-1caa24912645.jpeg)



## Answer
![WhatsApp Image 2022-05-31 at 2 51 58 PM](https://user-images.githubusercontent.com/99033374/171140053-6fbcc78a-39b7-4d46-9b97-272e59201f93.jpeg)


##Result

- console.log(findPath(obj, 'a.b.c')); // 12
- console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
- console.log(findPath(obj, 'a.b.d')); // undefined
- console.log(findPath(obj, 'a.c')); // undefined
- console.log(findPath(obj, 'a.b.c.d')); // undefined
- console.log(findPath(obj, 'a.b.c.d.e')); // undefined
- console.log(findPath(obj, 'a.b.j')); //false
- console.log(findPath(obj, 'a.b.j.k')); //undefined
- console.log(findPath(obj, 'a.k')); //null

