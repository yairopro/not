# not(fn)

Returns the negation of a function.

## Example

```javascript
const not = require("not");

const lie = () => false;
const tellTheTruth = not(lie);

tellTheTruth(); // true

// ----

const repeatMe = (words) => words;
const doNotRepeat = not(repeatMe);

doNotRepeat('Hello'); // false
doNotRepeat(false); // true
```

## Installation

`npm i not`

## Contributors

 - Raynos
 - Yairopro

## MIT Licenced
