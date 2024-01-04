class ProductCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<h2>Product Component</h2>`
  }
}

customElements.define('product-card', ProductCard)
