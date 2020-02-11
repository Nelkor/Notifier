import {
    LitElement,
    TemplateResult,
    html,
    customElement,
} from 'lit-element';

@customElement('not-test')
export class NotTest extends LitElement
{
    render(): TemplateResult
    {
        return html`
            <p>
                <a
                    href="https://google.com"
                >Google</a>, вот такая ссылка
            </p>
            <p>
                <not-link
                    href="https://google.com"
                >Google</not-link>, вот такая ссылка
            </p>
        `;
    }
}
