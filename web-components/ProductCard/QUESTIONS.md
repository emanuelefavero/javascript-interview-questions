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
