import { html, TemplateResult } from 'lit-element';

const notifications = {
    1: {
        read: false,
        time: 0,
        content: '[p]Первый абзац, в нём ссылки: [link https://ya.ru]яндекс[/link], [link https://google.com]гугл[/link] и [link https://mail.ru]мэйл[/link].[/p][p]Второй абзац.[/p]',
    },
};

const regP = /\[p](.+?)\[\/p]/g;
const regLink = /\[link (https?:\/\/.+?)](.+?)\[\/link]/g;

function renderLink(href: string, content: string)
{
    return html`<not-link href="${href}">${content}</not-link>`;
}

function renderParagraph(text: string): TemplateResult[]
{
    const result = [];

    let index = 0;

    // @ts-ignore
    let part = regLink.exec(text);

    while (part != null) {
        result.push(html`${text.slice(index, part.index)}`);

        index = part.index + part[0].length;

        result.push(html`${renderLink(part[1], part[2])}`);

        part = regLink.exec(text);
    }

    result.push(html`${text.slice(index)}`);

    return result;
}

export function cardById(id: number): TemplateResult[]
{
    const result = [];

    // @ts-ignore
    const text = notifications[id].content;

    let paragraph = regP.exec(text);

    while (paragraph != null) {
        const p = html`<p>${renderParagraph(paragraph[1])}</p>`;

        result.push(p);

        // @ts-ignore
        paragraph = regP.exec(text);
    }

    return result;
}
