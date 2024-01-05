class MyHeader extends HTMLElement {
  constructor() {
    super()

    // * TEMPLATE
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        h1 {
          font-size: 2rem;
          font-weight: 700;
        }
      </style>

      <h1></h1>
    `

    // Append template to shadow DOM
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // * DATA
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title')
  }
}

// Register the custom element
customElements.define('my-header', MyHeader)
