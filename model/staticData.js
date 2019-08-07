let Users = [
    {
        userID: 'user_1',
        userName: 'Asha',
        email: 'asha@gmail.com',
    },
    {
        userID: 'user_2',
        userName: 'Ram',
        email: 'ram@gmail.com',
    },
    {
        userID: 'user_3',
        userName: 'Hemanth',
        email: 'hemanth@gmail.com',
    },
    {
        userID: 'user_4',
        userName: 'Latha',
        email: 'latha@gmail.com',
    },
    {
        userID: 'user_5',
        userName: 'Varsha',
        email: 'varsha@gmail.com',
    },
];

let Books = [
    {
        bookID: 'book_1',
        title: 'A Tiger for Malgudi',
        author: 'R.K. Narayan',
        year: 1983
    },
    {
        bookID: 'book_2',
        title: 'Talkative Man',
        author: 'R.K. Narayan',
        year: 1986
    },
    {
        bookID: 'book_3',
        title: 'The Immortals of Meluha',
        author: 'Amish Tripathi',
        year: 2010
    },
    {
        bookID: 'book_4',
        title: 'The Secret of the Nagas',
        author: 'Amish Tripathi',
        year: 2011
    },
    {
        bookID: 'book_5',
        title: 'The Oath of the Vayuputras',
        author: 'Amish Tripathi',
        year: 2013
    },
];

let UserBooks = {
    'user_1': [
        {
            bookID: 'book_4',
            title: 'The Secret of the Nagas',
            author: 'Amish Tripathi',
            year: 2011
        }
    ],
    'user_2': [
        {
            bookID: 'book_4',
            title: 'The Secret of the Nagas',
            author: 'Amish Tripathi',
            year: 2011
        },
        {
            bookID: 'book_3',
            title: 'The Immortals of Meluha',
            author: 'Amish Tripathi',
            year: 2010
        },
        {
            bookID: 'book_2',
            title: 'Talkative Man',
            author: 'R.K. Narayan',
            year: 1986
        }
    ],
    'user_3': [
        {
            bookID: 'book_5',
            title: 'The Oath of the Vayuputras',
            author: 'Amish Tripathi',
            year: 2013
        },
        {
            bookID: 'book_1',
            title: 'A Tiger for Malgudi',
            author: 'R.K. Narayan',
            year: 1983
        }
    ],
};

module.exports.staticData = {
    Users: Users,
    Books: Books,
    UserBooks: UserBooks,
};
