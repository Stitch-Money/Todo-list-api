
const http = require('http');

const express = require('express');
const app = express();
app.use(express.json())

// your express configuration here

const httpServer = http.createServer(app);

let todos = [
    {
        todo: "Write app for QA assessment",
        status: "inprogress",
        id: 1
    },
    {
        todo: "Write up for QA assessment",
        status: "done",
        id: 2
    }
];
// For http
httpServer.listen(8080);


app.get('/todos', function (req, res) {
    res.header('Content-type', 'text/json');
    return res.end(JSON.stringify(todos));
});

app.post('/todos', function (req, res) {
    res.header('Content-type', 'text/json');
    todos.push(req.body)
    return res.end(JSON.stringify(todos));
});

app.post('/edit-todos', function (req, res) {
    let idToEdit = req.body.id;
    let updatedToDo = req.body.todo;
    let updatedStatus = req.body.status
    let todoInArray = todos.find(element => element.id === idToEdit);
    let todoPosition = todos.indexOf(todoInArray)
    console.log(todoPosition)
    todos[todoPosition].todo = updatedToDo;
    todos[todoPosition].status = updatedStatus;

    res.header('Content-type', 'text/json');

    return res.end(JSON.stringify(todos));
});

app.post('/del-todos', function (req, res) {
    let idToEdit = req.body.id;
    let todoInArray = todos.find(element => element.id === idToEdit);
    let todoPosition = todos.indexOf(todoInArray)
        todos.splice(todoPosition,1);

    res.header('Content-type', 'text/json');

    return res.end(JSON.stringify(todos));
});
