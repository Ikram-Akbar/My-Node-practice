const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('hello world from my local host server')
});

// creating array of users

const users = [
    {
        "id": "3",
        "name": "Al Mahfuz Hossain",
        "age": "14",
        "date of birth": "14 April 2000",
        "birth place": "Chittagong, Noakhali",
        "email": "Ikramhossain850@gmail.com",
        "website": "https://ikram.akbar.netlify.app",
        "programming": {
            "Frontend": "HTML5,CSS3, Bootstrap 5, JavaScript, ES6, React",
            "Backend": "NodeJS, MongoDB,NextJS, ExpressJS"
        }
    },
    {
        "id": "2",
        "name": "Abu Zaher",
        "age": "23",
        "date of birth": "16 dec 1982",
        "birth place": "Chittagong, Noakhali",
        "email": "Ikramhossain850@gmail.com",
        "website": "https://ikram.akbar.netlify.app",
        "programming": {
            "Frontend": "HTML5,CSS3, Bootstrap 5, JavaScript, ES6, React",
            "Backend": "NodeJS, MongoDB,NextJS, ExpressJS"
        }
    },
    {
        "id": "1",
        "name": "Ikram Hossain",
        "age": "23",
        "date of birth": "10 July 1999",
        "birth place": "Chittagong, Noakhali",
        "email": "Ikramhossain850@gmail.com",
        "website": "https://ikram.akbar.netlify.app",
        "programming": {
            "Frontend": "HTML5,CSS3, Bootstrap 5, JavaScript, ES6, React",
            "Backend": "NodeJS, MongoDB,NextJS, ExpressJS"
        }
    }
];

// Create a get response  for user
app.get('/users', (req, res) => {
    console.log(req.query)
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user =>
            user.name.toLowerCase().includes(search)
        );
        res.send(searchResult);
    }
//    else if (search) {
//         const searchResult = users.filter(user =>
//             user.name.toUpperCase().includes(search)
//         );
//         res.send(searchResult);
//     }
    else {

        res.send(users)
    }
});

// For specific user / params
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

// query params
// app.get('/users', (res, req) =>{
//     console.log(req.query);
//     res.send(users)
// });

app.listen(port, () => {
    console.log('this is my first node file')
});