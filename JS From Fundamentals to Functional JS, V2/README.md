# JavaScript: From Fundamentals to Functional JS, v2 - Course Notes #
*[Frontend Masters Course](https://frontendmasters.com/courses/js-fundamentals-functional-v2/)*
JS From Fundamentals to Functional JS, v2
## TODO: ##
  * 

## Tips & Trips: ##
  * Some developer tools in browsers will only show numerical indices when logging 

## sections ##

**Intro, Tips for Learning, Functional Programming**
  * Interactive Murder Mystery as the course go along
  * Difficulty ramps up considerably
  * Functional Programming
    * FP is about the verbs, OOP is about the nouns
    * Think more along the lines of the actions instead of objects
    * Core tenets is to make pure functions that don't have side effects
      * easier to test
      * easier readability

**Objects**
  * Anything that uses the `.` is an object in JS
  * Property Access
    * Primitive values are passed by value
    * Non-primitive values are passed by reference
  * Arrays are objects - rules are the same
    * Special kind of object with it's own methods
    * important difference is the `.length` property
      * `.length` is computed as you add numerical indices
      * numerical indices are different than the properties on an array
      * Numerical indices provides additional functionality such as `reverse()`, `sort()`
  * Bracket Notation
    * value inside brackets is something that needs to be evaluated
    * use when dot notation is not an option
      * when the value is not supposed to be a string literal
    * if a function is put into bracket notation it will be stringified and not able to be called
      * `obj[function(){}] -> typeof Object.keys(obj)[0] // string`
      * `Object.keys(obj)[0] -> // "function(){}"`
  * Rules for when/what it can be used with for notation:
    * Dot notation:
      * Strings
    * Brackets:
      * Strings
      * Numbers
      * Variables
      * Weird Characters
      * Expressions
  * Destructuring

**List Transformations**
  * 

**.forEach() Function**
  * 

**.map() Function**
  * 

**.filter() Function**
  * Fun exercise

**Functions In Depth**
  *

**Scope**
  * 

**Callbacks**
  *

**Functional Utilities**
  *

**Advanced Scope Closure**
  *

**Wrapping Up**
  *