import {
    LitElement,
    html,
    css,
    customElement,
    property,
} from 'lit-element';

@customElement('not-card')
export class NotCard extends LitElement
{
    static get styles()
    {
        return css`
        `;
    }

    @property({ type: String })
    content = '';

    protected render()
    {
        return html`
        `;
    }
}
