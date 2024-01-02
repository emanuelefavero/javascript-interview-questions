// QUESTIONS

// Q: What is the DOM?
// A: The DOM is a tree structure that represents the HTML of a webpage. It is a way for JavaScript to interact with the HTML of a webpage.

// Q: What is the document object?
// A: The document object is the root of the DOM tree. It is the entry point to the DOM

// Q: What is DOM manipulation?
// A: DOM manipulation is the process of changing the HTML of a webpage using JavaScript. (Adding, removing, or changing HTML elements)

// Q: Remove an element from the DOM
const element = document.querySelector('p')
element.remove()

// Q: Add an element to the DOM
const newElement = document.createElement('p')
newElement.textContent = 'This is a new element'
document.querySelector('body').appendChild(newElement)

// Q: Change an element on the DOM
const element2 = document.querySelector('p')
element2.textContent = 'This is the new text content'
