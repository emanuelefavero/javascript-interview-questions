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

customElements.define('product-card', ProductCard)
