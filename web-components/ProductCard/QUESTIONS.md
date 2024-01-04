# Web Components questions

## Explain what a Web Component is and how can you create one

A Web Component allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.

**Example**:

html:

```html
<my-component></my-component>

<script src="./productCard.js"></script>
```

js:

```js
// ./productCard.js
class ProductCard extends HTMLElement {
  constructor() {
    super()
    const h1 = document.createElement('h1')
    h1.innerHTML = `<style>
      h1 {
        color: red;
      }
    </style>
    Product Component`
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(h1)
  }
}

customElements.define('my-component', MyComponent)
```

## What is the Shadow DOM? Explain the need for it in Web Components

The Shadow DOM allows you to create a DOM tree that's separate from the main DOM. This way you can create a component that's completely isolated from the rest of the page. For example giving a different style to the component without affecting the rest of the page

## How do you add a component to the Shadow DOM?

You can add a component to the Shadow DOM by using the `attachShadow` method

```js
this.attackShadow({ mode: 'open' }) // open means that you can access the shadow DOM from outside the component
```
