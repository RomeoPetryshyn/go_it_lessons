import {nanoid} from 'nanoid';

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/posts",
        text: "Posts"
    },
    {
        id: nanoid(),
        to: "/my-books",
        text: "My Books"
    },
];

export default items;
