const template = document.createElement('template')

template.innerHTML = `
<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(203, 213, 225, 0.8);
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.4rem;
    user-select: none;

    h3 {
      margin-bottom: -.2rem;
      user-select: text;

      .price {
        user-select: none;
        color: #059669;
      }
    }

    button {
      background-color: #059669;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background-color: #10b981;
      }
    }
  }

  .card:hover {
    box-shadow: 0 6px 12px 0 rgba(203, 213, 225, 0.9);
  }
</style>

<div class="card">
  <img src="./images/banana.png" alt="fruit" width='150' />
  <div class="container">
    <h3>Banana<span class='price'>&nbsp;$0.50</span></h3>
    <p>Not Sold</p>
    <button class='btn'>Buy</button>
  </div>
</div>
`

class ProductCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('product-card', ProductCard)
