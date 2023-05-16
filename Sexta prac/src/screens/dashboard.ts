import { getData } from "../services/getData";
import { ApiType } from "../types/ApiType";
import { AttributeCard } from "../components/Card/Card";
import "../components/export"

class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data);
    }

    render(data: any){  
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

        data.forEach((e:ApiType) => {
            const card = this.ownerDocument.createElement('app-card');

            card.setAttribute(AttributeCard.name, e.name);
            card.setAttribute(AttributeCard.gender, e.gender);
            card.setAttribute(AttributeCard.eye_color, e.eye_color);
            card.setAttribute(AttributeCard.btn_text, "LIKE");
            this.shadowRoot?.appendChild(card);
        })
    }
}

customElements.define('app-dashboard', Dashboard);