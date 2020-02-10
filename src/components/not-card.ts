import {
    LitElement,
    TemplateResult,
    CSSResult,
    html,
    css,
    customElement,
    property,
} from 'lit-element';

// TODO исправить
const regex = /\[link (.+?)](.+?)\[\/link]/g;

@customElement('not-card')
export class NotCard extends LitElement
{
    static get styles(): CSSResult
    {
        return css`
            .card {
                width: 200px;
                border: solid 1px;
                padding: 20px;
                border-radius: 4px;
            }
        `;
    }

    @property({ type: String })
    content = '';

    protected render(): TemplateResult
    {
        return html`
            <div class="card">
                <span>${this.content}</span>
            </div>
        `;
    }
}
