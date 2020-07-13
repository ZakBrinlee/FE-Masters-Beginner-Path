# Getting Started with JavaScript, v2 - Course Notes #
*[Frontend Masters Course](https://frontendmasters.com/courses/getting-started-javascript-v2/)*

## TODO: ##
  * Learn more about JS scope closure
    * (You-Dont-Know-JS - scope closures)[https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures]

## Tips & Trips: ##
  * Try to make your use of `null` and `undefined` indistinguishable
  * A quality JS program embraces coercions, making sure the types involved in every operation are clear
  * Useful code: when the reader is focused on what is important
  * Dangerous code: when the reader can't tell what will happen
  * Better code: when the reader understands the code

## sections ##

**Intro & Overview**
  * 3 Pillars of JS
    * Types/Coercion
    * Scope/Closures
    * this/Prototypes
    * Kyle's book series dives really deep into each topic

**Programming Primer:**
    * No distinction between numbers and numbers with decimal places (integer/float)
    * `null` & `undefined` - empty values
    * `+` operator is an overloaded operator, that way it can be used for strings (concat) and numbers (arithmetic)
    * array is a subtype of object
      * `typeof [1,2,3] //object`
    * Variable - representation of a location in memory
    * `console` is a variable, a built in operator
    * `()` is an overloaded operator
      * used in grouping `(5 * 6)` - groups the operation
      * `()` after a function is a call operator

**Types & Coercion:**
  * Primitive Types
    * [undefined, string, number, boolean, object, symbol, null?, function?, array?]
    * In JS, variables __don't__ have types, values __do__.
    * Function is not a type, it is a sub-type of object
    * `NaN` - Invalid math operations
      * Look at `Number.isNaN()` for being able to tell if a value is NaN
    * `New`
      * Need to be aware when and how being used. If using `new` in front of a type like String() then it will force it into that type
  * Converting Types
    * `Coercion`: The way to convert one type to another
      * Can use the `+` overloading of operation for implicit type coercion.
    * `Boolean`
      * Falsy - Converted empty values to boolean
        * [ "", [0, -0], null, NaN, false, undefined ]
      * Truthy - Converted values to boolean
        * [ 'foo', 23, {a: 1}, [1,3], true, function(){} ]
      * Using `!!` in front of a value in a boolean check will be the same as `Boolean()`
  * Checking Equality
    * `==` : allows coercion (types different)
    * `===` : disallows coercion (types same)

**Scope:**
  * Nested Scope
    * Scope: where to look for things
    * undefined vs undeclared
      * undefined: A variable that has been declared but does not have a value
      * undeclared: A variable that has never been declared
    * Function Expressions
      * First class - can be passed
      * Recommended to use Named functions because it is more descriptive
        * Anonymous (arrow) functions: `var ids = people.map(person => person.id);`
        * Named functions: `var ids = people.map(function getId(person){return person.id});`
    * Block Scoping
      * `let` - instructs to create a variable inside a curly brace block - which is separate than any other variables with the same name
      * `var` - recommended usage for function level use where let should be block level use
      * Recommended to use a explicit let block just to keep the scope as narrow as possible
    * Closure
      * Definition: When a function 'remembers' the variables outside of it, even if you pass that function elsewhere

  * Closure

**this & Prototypes:**
  * `this`: a functions `this` references the execution context for that call, determined entirely by __how the function was called__.
    * A `this`-aware function can thus have a different context each time it is called. Which makes it more flexible and reuseable
  * `prototype`: can use a function similar to a class with a constructor using prototype
    * Method of one object that is able to delegate to another object and use itself as the `this` keyword

**Practice:**
  * Fun exercise

**Wrapping Up:**
  * Javascript
    * First Pillar - Types
      * Types exist
      * Dynamically typed language
      * Convert type to type with coercion
      * Types of equality checking
    * Second Pillar - Scope and Closure
      * Most important and powerful patterns
      * Opens to module patter
    * Third Pillar - this and Prototypes
      * Enables us to do classes using the new class keyword