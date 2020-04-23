# Complete Intro to Web Development, v2 #

## Takeaways: ##

## ahhas: ##
  * webfonts usually are a few 100kbs and make the page load heavier - try not to use

## sections ##

**Overview of What You'll Be Learning In This Course:**
  * HTML & CSS - declarative statements, not really a language that can be ran
  * JavaScript - programming language
  * Command line and Git
  * House analogy
    * HTML is similar to the building materials (walls, foundation, roof, etc)
    * CSS is similar to blueprints - rules that describe how the house is organized and looks (layout & style)
    * JavaScript is similar to a smart house - do actions for you like switch on a light (animation), turn on the coffee maker (button)
    * Servers - NodeJS - How to communicate through the house (order a pizza - server is the pizza place) request and response
  * Resources:
    * MDN - Mozila Developer Network (Not what it stands for anymore but that is what it is)
    * CSS Tricks - Knowledge base/Articles of developing CSS
    * Library/Framework - Docs and github - straight to the source for knowledge about the particular library or code
    * Front-End handbooks - Front-End Masters handbooks for different subjects. https://frontendmasters.com/books/ 

**Basic HTML:**
  * Classes
    * Any tag can have a class
    * Label/description for what the element is
  * id
    * Can only be used once - classes are better for grouping
    * Great for deep linking on the page

**Meta HTML:**
  * `<!DOCTYPE html>`
    * Lets the browser know we are doing HTML5
    * Has to be the first line of the code/page
  * `<html lang='en'>`
    * Start of the document
    * lang - sets the language
  * `<head>`
    * Includes the meta information for the document
  * `<body>`
    * content to be displayed
    * visual html
  * `<script><link><style>`
    * used for bringing in Javascript/CSS/or outside document resources

**Basic CSS:**
  * Similar to home Blueprints - Where things are placed and how they look
  * Series of rules
  * style attributes assigned to a parent, will be applied to children of parent
  * CSS Playground: https://codepen.io/btholt/pen/ELaxOB

**CSS Selectors and the Cascade:**
  * '.' - period before selector means select a class
  * '#' - hash before selector means select a id
  * The Cascade
    * When two rules are considered equal - the last rule wins
    * Rules are property-by-property bases - 6:30 minutes in this section for explaination
    * more specific rules will win over less specific rules/selectors
  * Classes are more specific than tags
    * .title {} will override h1 {}
    * `<h1 class='title'>example</h1>`
  * Good example: giving selector blocks number values
    * 10 points for each class selector
    * 1 point for each tag select
  * IDs and !important
    * 100 points for each id selector
    * 1000 points for each !important selector
  * Pseudo-Classes
    * ':' - key for selecting a pseudo-class
    * action/event to be selected on
    * hover/focus/mouseleave/mouseenter/
    * structural pseudo classes like first-child/nth-child()/etc

**Layout CSS:**

**Effective Patterns for Writing CSS:**

**Project: HTML & CSS:**

**Programming Fundamentals:**

**Functions and Scope:**

**Objects and Arrays:**

**The DOM:**

**JavaScript, HTML, and CSS Project:**

**AJAX:**

**Integrating with Other People's Libraries:**

**Git and Bash:**

**Node.js:**

**Deploying Your App:**

**Final Thoughts:**