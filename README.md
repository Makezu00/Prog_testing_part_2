Libraries to be tested:

Markus:

    CountBy.js
    reduce.js
    every.js
    filter.js
    isEmpty.js

Pyry:

    map.js
    memorize.js
    slice.js
    toNumber.js
    toString.js

How these files will be tested is described shortly below.

The file countBy.js is tested by giving it inputs of a certain object and asserting whether the
count matches the anticipated value.

The file reduce.js asserting results with their expected outcomes. Invalid entries like iterate not
a function will be tested as well as a non-array collection type.

The file every.js is tested by giving different arrays with a predicate. The result from an empty
array will also be tested. At least one true case and one false case will be used.

The file filter.js is tested by comparing an input array and the expected output. Size as well as
the individual elements will be inspected.

The file isEmpty.js is tested by giving it objects of different types giving each object type a true
and a false case.

The file map.js is tested by simply comparing generated outputs with expected outputs.

The file memoize.js is tested by asserting the values in the cache with a map that has the
expected results. Incorrect inputs are also tested to prove that the error handling works as
intended.

The file slice.js is tested by asserting different arrays with different slicing parameters. Negative
and incorrect values will be used as well.

The file toNumber.js is tested by giving the function different types of objects. Values that
cannot be presented as a number will be tested.

The file toString.js is tested by using the same principle as with toNumber.js file.