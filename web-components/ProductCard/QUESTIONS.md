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
class MyComponent extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = '<h1>Hi</h1>'
  }
}

customElements.define('my-component', MyComponent)
```
