const template = document.createElement('template')

template.innerHTML = `
<style>
  .card {
    box-shadow: 0 3px 5px 0 rgba(203, 213, 225, 0.8);
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    user-select: none;

    &:hover {
      background-color: rgba(241, 245, 249, 0.4);
      box-shadow: 0 4px 6px 0 rgba(203, 213, 225, 0.9);
    }

    img {
      padding: 0.5rem;
    }

    h3 {
      user-select: text;
      position: relative;
      top: 0.3rem;

        .price {
            user-select: none;
            margin-left: 0.2rem;
            color: #059669;
        }
      }


    button {
      background-color: #059669;
      color: #fff;
      border: 1px solid #10b981;
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color 0.15s ease-in;

      &:hover {
        background-color: #10b981;
      }

      &:active {
        background-color: #047857;
        scale: 0.98;
      }
    }
  }
</style>

<div class="card">
  <img width='130' />
  <div class="container">
    <h3>
      <span class='product-name'></span>
      <span class='price'></span>
    </h3>
    <p></p>
    <button class='btn'>Buy</button>
  </div>
</div>
`

class ProductCard extends HTMLElement {
  constructor() {
    super()

    // Create shadow DOM
    this.attachShadow({ mode: 'open' })

    // Add template
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // Add dynamic data
    this.shadowRoot.querySelector('.product-name').innerText =
      this.getAttribute('productName')
    this.shadowRoot.querySelector('.price').innerText =
      this.getAttribute('price')
    this.shadowRoot.querySelector('img').src = this.getAttribute('image')
    this.shadowRoot.querySelector('img').alt = this.getAttribute('productName')
    this.shadowRoot.querySelector('p').innerText =
      this.getAttribute('productStatus')
  }
}

// Define the new HTML element
customElements.define('product-card', ProductCard)
