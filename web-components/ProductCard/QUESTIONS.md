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
const template = document.createElement('template')
template.innerHTML = `<style>
      h1 {
        color: red;
      }
    </style>
    <h1>Product Component</h1>`

class ProductCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('product-card', ProductCard)
```

## What is the Shadow DOM? Explain the need for it in Web Components

The Shadow DOM allows you to create a DOM tree that's separate from the main DOM. This way you can create a component that's completely isolated from the rest of the page. For example giving a different style to the component without affecting the rest of the page

## How do you add a component to the Shadow DOM?

You can add a component to the Shadow DOM by using the `attachShadow` method

```js
this.attackShadow({ mode: 'open' }) // open means that you can access the shadow DOM from outside the component
```

## WHat is the purpose of the `<template>` html tag?

The `<template>` tag is used to declare fragments of HTML that can be cloned and inserted in the document by script

## How to add a template?

First, create a template element in the HTML document

```html
<template id="myTemplate">
  <h1>My template</h1>
</template>
```

Then, use the `content` property to get the template content

```js
const template = document.querySelector('#myTemplate')
body.appendChild(template.content.cloneNode(true)) // the template must be cloned before it can be used
```

> TIP: You can also create a template element in the JS file

```js
const template = document.createElement('template')
template.innerHTML = `<h1>My template</h1>`
```

## What is the `observedAttributes` method?

The `observedAttributes` method is used to specify the attributes that you want to observe for changes. When an attribute is changed, the `attributeChangedCallback` method is called

```js
static get observedAttributes() {
  return ['name', 'price']
}
```

## When will the `attributeChangedCallback` method be called?

The `attributeChangedCallback` method is called when an attribute is added, removed, updated or replaced

## How can you improve rendering with the `attributeChangedCallback` method?

By checking if the attribute has changed before updating the DOM

```js
attributeChangedCallback(name, oldValue, newValue) {
  if (newValue !== oldValue) {
    this.shadowRoot.querySelector('h1').innerText = newValue
  }
}
```
