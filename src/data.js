import { LitElement, html, css} from "lit-element";
import axios from 'axios'

export class Data extends LitElement {


  static get properties(){
    return {
      state: {type : Array},
      loaded : { type : Boolean },
      defaultMessage : { type : String }
    }
  }

  getData(){
    axios.get("https://api.datos.gob.mx/v2/Releases_SFP").then(res=> {
      this.state = [...res.data.results ]
      if(this.state.length){
        this.loaded = true
        this.requestUpdate()
      } else {
        this.defaultMessage = "Hubo un error en el origen, intentelo mas tarde"
      }
    }).catch(err => {
      this.defaultMessage = "Hubo un error en el origen, intentelo mas tarde"
    })
  }

  static get styles(){
    return css`
    table, th, td {
      border: 1px solid black;
    }`
  }

  constructor(){
    super()
    this.state = []
    this.loaded = false
    this.defaultMessage = "Loading"
    this.getData();
  }

  createList(){
    return html`
      <table style="width:100%">
        <tr>
          <th>Comprador</th>
          <th>Fecha</th>
          <th>Publicante</th>
          <th>Descripcion</th>
          <th>Participantes</th>
        </tr>
        ${this.state.map(row => html`
          <tr>
            <th>${row.buyer.name}</th>
            <th>${row.date}</th>
            <th>${row.publisher.name}</th>
            <th>${row.tender.title}</th>
            <th>${row.parties.map(part => html`<p>${part.name}</p>`)}</th>
          </tr>
        `)}
      </table>
    `
  }

  render() {
    return html`
    <h1>Registros de la Secretaria de la funcion publica</h1>
    ${ this.loaded? this.createList() : html`<h1>${this.defaultMessage}</h1>`}
    `;
  }
}

customElements.define("data-view", Data);