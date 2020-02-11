import {
    LitElement,
    CSSResult,
    TemplateResult,
    html,
    css,
    customElement,
    property,
} from 'lit-element';

@customElement('not-link')
export class NotLink extends LitElement
{
    static get styles(): CSSResult
    {
        return css`
            a {
                text-decoration: none;
                position: relative;
                color: #fc2c38;
                transition: .2s;
            }

            a::before {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 0;
                height: 1px;
                background-color: #fc2c38;
                transition: .2s;
            }

            a:hover {
                color: orange;
            }

            a:hover:before {
                left: 0;
                width: 100%;
                background-color: orange;
            }
        `;
    }

    @property({ type: String })
    href = '#';

    render(): TemplateResult
    {
        return html`
            <a
                href="${this.href}"
                target="_blank"
                rel="noopener"
            ><slot></a>`;
    }
}
