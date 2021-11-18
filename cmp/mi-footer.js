class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Héctor Chávez Vargas.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
