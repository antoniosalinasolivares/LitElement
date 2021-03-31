
import { LitElement, html } from "lit-element";


export class Home extends LitElement {
  render() {
    return html`
      <h1>
        Bienvenito a la pagina de inicio
      </h1>
      <p className="">Este es un ejercicio de reactividad y consulta de datos en Litelement</p>
      <p className="">Checa las opciones en la barra de navegacion para ver las opciones que existen</p>
    `;
  }
}

customElements.define("home-view", Home);