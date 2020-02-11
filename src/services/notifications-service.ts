const notifications = {
    1: {
        read: false,
        time: 0,
        paragraphs: [
            [
                {
                    type: 'plain',
                    content: 'Привет, вот ',
                },
                {
                    type: 'link',
                    content: 'ссылка',
                    href: 'https://google.com',
                },
                {
                    type: 'plain',
                    content: ', пока.',
                },
            ],
        ],
    },
};

export function cardById(id: number)
{
    // @ts-ignore
    return notifications[id];
}
