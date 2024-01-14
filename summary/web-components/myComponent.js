// * Web Components

class MyComponent extends HTMLElement {
  constructor() {
    super()

    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        h2 {
          color: crimson;
        }
      </style>

      <h2></h2>
    `

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title')
  }
}

customElements.define('my-component', MyComponent)
