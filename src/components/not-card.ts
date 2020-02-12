import {
    LitElement,
    TemplateResult,
    CSSResult,
    html,
    css,
    customElement,
    property,
} from 'lit-element';

import { cardById } from '../services/notifications-service';

@customElement('not-card')
export class NotCard extends LitElement
{
    static get styles(): CSSResult
    {
        return css`
            .card {
                width: 300px;
                border: solid 1px;
                padding: 20px;
                border-radius: 4px;
            }
        `;
    }

    @property({ type: Number })
    cardId = 1;

    @property({
        type: Array,
        attribute: false,
    })
    card = cardById(this.cardId);

    protected render(): TemplateResult
    {
        return html`
            <div class="card">
                <div class="paragraphs">${this.card}</div>
            </div>
        `;
    }
}
