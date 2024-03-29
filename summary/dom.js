// * BOM
// The BOM (Browser Object Model) is a browser-specific API that allows JavaScript to interact with the browser. (window, location, history, document, navigator, screen, etc.)

// * The global object in the browser is the window object
// window.document.querySelector('h1').innerHTML = 'Hello'

// * The document object is a child of the window object

// * Get the hostname of the current URL
// console.log(window.location.hostname) // localhost

// * Get a value typed in the address bar
// console.log(window.location.search) // ?id=5

// ------------------------------------------------------------

// * Event bubbling
// When an event happens on an element, the event will bubble up through its parents. For example, if a click event happens on an element, it will also trigger all click events on its parents

// * Event capturing
// The event will first trigger on the parent and then on the element itself

// * Prevent event bubbling
// call `event.stopPropagation()` on the event object

// * The default event behavior is event bubbling

// * Prevent default behavior
// call `event.preventDefault()` on the event object

// * Event delegation
// Instead of adding an event listener to each element, add one event listener to a parent element and use `event.target` to target the children

// * Get the value of the event which triggered the event listener
// `event.target.value`

// * Different types of nodes in the DOM
// 1. Element nodes - HTML tags
// 2. Text nodes - text inside HTML tags
// 3. Comment nodes - HTML comments
// 4. Document nodes - the entire document
// 5. Attribute nodes - attributes of HTML tags

// * Check if an element has child nodes
// `element.hasChildNodes()`

// * Access the parent node of an element
// `element.parentNode`

// * Access the child nodes of an element
// `element.childNodes`

// * Access the first child node of an element
// `element.firstChild`

// * Access siblings of an element
// `element.nextSibling` and `element.previousSibling`

// ------------------------------------------------------------

// * Disable double click on an element
// `element.ondblclick = (event) => event.preventDefault()`

// * Check mouse position while moving the mouse
// document.onmousemove = (event) => {
//   console.log(`Mouse position: ${event.clientX}, ${event.clientY}`)
// }

// * pageX/Y, clientX/Y, screenX/Y
// pageX/Y - mouse position relative to the top left corner of the entire page
// clientX/Y - mouse position relative to the top left corner of the viewport
// screenX/Y - mouse position relative to the top left corner of the screen

// * Check if two keys are pressed at the same time
// document.onkeydown = (event) => {
//   if (event.ctrlKey && event.key === 's') console.log('hi)
// }

// * Check which key is pressed
// document.onkeydown = (event) => {
//   console.log(event.key)
// }

// * Handle checkbox events
/*
document.getElementById('myCheckbox').addEventListener('change', function(event) {
  if (this.checked) console.log('checked')
  else console.log('unchecked')
})
*/

// * Prevent Cut, Copy, Paste events
/*
element.addEventListener('copy', (event) => {
    event.preventDefault()
});
*/
