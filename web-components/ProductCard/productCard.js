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
