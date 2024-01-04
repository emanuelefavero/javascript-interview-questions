class ProductCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<h2>Product Component</h2>`
  }
}

window.customElements.define('product-card', ProductCard)
