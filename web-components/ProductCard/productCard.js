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

    button.delete-button {
      background-color: #e11d48;
      border: 1px solid #f43f5e;
      font-weight: bold;

      &:hover {
        background-color: #f43f5e;
      }

      &:active {
        background-color: #be123c;
      }
    }
  }
</style>

<div class="card">
  <img width='130' />
  <div class="container">
    <h3>
      <!-- pass html inside the component with slot tag -->
      <slot name='title'></slot>
      <span class='price'></span>
    </h3>
    <p></p>
    <button class='buy-button'>Buy</button>
    <button class='delete-button'>
      X
    </button>
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
    this.shadowRoot.querySelector('.price').innerText =
      this.getAttribute('price')
    this.shadowRoot.querySelector('img').src = this.getAttribute('image')
    this.shadowRoot.querySelector('img').alt = this.getAttribute('pname')
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('status')
  }

  // Add event listener
  connectedCallback() {
    this.shadowRoot.querySelector('.buy-button').onclick = () => {
      this.status = 'Sold' // Update status attribute
      this.setAttribute('status', 'Sold') // Update status attribute
    }

    this.shadowRoot
      .querySelector('.delete-button')
      .addEventListener('click', () => {
        this.remove() // remove this element
      })
  }

  /**
   * @param {string} value
   */

  // ? Updating the status with the setter is a more efficient way
  set status(value) {
    this.setAttribute('status', value)
    // value = 'Sold', @see connectedCallback()
  }

  // ? This method is needed to keep track of the attribute changes
  static get observedAttributes() {
    return ['status'] // List of attributes to keep track of
  }

  // Update displayed data after attribute change
  attributeChangedCallback(attributeName, oldValue, newValue) {
    this.shadowRoot.querySelector('p').innerText = newValue
  }

  // ? This method will be called when the element is removed from the DOM
  disconnectedCallback() {
    this.shadowRoot.querySelector('.delete-button').removeEventListener()
  }
}

// Define the new HTML element
customElements.define('product-card', ProductCard)
