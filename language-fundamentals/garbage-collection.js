// QUESTIONS
// Q: What is garbage collection?
// A: Garbage collection is the process of automatically freeing memory on the heap that is no longer referenced by any variable

// Q: How does garbage collection work in JavaScript?
// A: JavaScript uses automatic garbage collection. This means that the JavaScript engine automatically allocates memory for objects and frees it when it is no longer needed. This is done by the JavaScript engine using a garbage collector.

// Q: Which algorithm does the JavaScript engine use for garbage collection?
// A: The JavaScript engine uses the Mark and Sweep algorithm for garbage collection. This algorithm works by starting at the global object and will marks objects that are being used or referenced and sweeping away the objects that are no longer needed.

/*
// * Example

        Global
      /   |   \
    obj1 obj2 obj3    obj7
  /       |     \
obj4    obj5    obj6  obj8

// Objects obj7 and obj8 are not referenced by any variable so they will be swept away by the garbage collector
*/
