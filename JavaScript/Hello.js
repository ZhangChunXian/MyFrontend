let book = {    // objects are enclosed in curly braces.
    topic: 'JavaScript',    // The property "topic" has value "JavaScript"
    edition: 7              // The property "edition" has value 7
};                          // The curly brace marks the end of the object

// Access the properties of an object with . or []:
book.topic              // => "JavaScript"
book['edition']         // => 7: another way to access property values
book.author = "Flanagan";   // Create new properties by assignment.
book.contents = {};         // {} is an empty object with no properties.

// Conditionally access properities with ?.
book.contents?.ch01?.sect11


let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];