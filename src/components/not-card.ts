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

    private static renderPart(part: { type: any, content: any, href: any }): TemplateResult
    {
        switch (part.type) {
        case 'plain':
            return html`${part.content}`;
        case 'link':
            return html`
                <not-link href="${part.href}">${part.content}</not-link>
            `;
        }

        // TODO delete
        return html``;
    }

    private static renderParagraph(paragraph: []): TemplateResult
    {
        return html`${paragraph.map(NotCard.renderPart)}`;
    }

    @property({ type: Number })
    cardId = 1;

    @property({
        type: Object,
        attribute: false,
    })
    card = cardById(this.cardId);

    protected render(): TemplateResult
    {
        return html`
            <div class="card">
                <div class="paragraphs">
                    ${this.card.paragraphs.map(NotCard.renderParagraph)}
                </div>
            </div>
        `;
    }
}
