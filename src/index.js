import { LitElement, html  } from "lit-element";
import { router } from "lit-element-router";
import "./home"
import "./data"

class App extends router(LitElement) {

    static get Properties(){
        return {
            home : { type : Boolean }
        }
    }

    constructor(){
        super()
        this.home = true;
    }

    render() {
        return html`
            ${this.navBar()}
            ${this.home? html`<home-view/>` : html`<data-view/>` }
        `
    }

    handleClickHome () {
        this.home = true
        this.requestUpdate()
    }
    handleClickData () {
        this.home = false
        this.requestUpdate()
    }

    navBar () {
        return html`
        <a class="waves-effect waves-light btn" @click=${this.handleClickHome}> Home</a>
        <a> | </a>
        <a class="waves-effect waves-light btn" @click=${this.handleClickData}> Consulta a la Secretaria de funcion pública </a>
        `
    }

}

customElements.define('my-app', App);