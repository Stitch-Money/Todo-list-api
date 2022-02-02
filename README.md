# TODO LIST API

## Requirements

To install this application you require the following :

npm : 8.1.2
nvm : 0.39.1
node : v16.13.2


Once you have installed npm and nvm, you may use nvm to install Node JS v16 which is a requirement for this project

After installing node, navigate to the root directory of this project and in your terminal run

`npm install`

Then to run the application, run:

`node server.js`


## API DETAILS

#### GET TODO's

Method: GET
Path: /todos
Produces: JSON Array of Todos
Example:
````
[
    {
        "todo": "Write app for QA assessment",
        "status": "inprogress",
        "id": 1
    },
    {
        "id": 3,
        "todo": "add redit",
        "status": "inprogress"
    }
]
````

#### ADD TODO's

Method: POST
Path: /todos
Consumes: JSON Object of Todo to add
Produces: JSON Array of Todos

Example(consumes):
````
    {
        "id": 3,
        "todo": "add redit",
        "status": "inprogress"
    }
````

Example(produces):
````
[
    {
        "todo": "Write app for QA assessment",
        "status": "inprogress",
        "id": 1
    },
    {
        "id": 3,
        "todo": "add redit",
        "status": "inprogress"
    }
]
````

#### EDIT TODO's

Method: POST
Path: /edit-todos
Consumes: JSON Object of Todo to edit
Produces: JSON Array of Todos

Example(consumes):
````
    {
        "id": 3,
        "todo": "add redit",
        "status": "inprogress"
    }
````

Example(produces):
````
[
    {
        "todo": "Write app for QA assessment",
        "status": "inprogress",
        "id": 1
    },
    {
        "id": 3,
        "todo": "add redit",
        "status": "inprogress"
    }
]
````

#### DELETE TODO's

Method: POST
Path: /del-todos
Consumes: JSON Object of containing id of todo to delete
Produces: JSON Array of Todos

Example(consumes):
````
    {
        "id": 3,
    }
````

Example(produces):
````
[
    {
        "todo": "Write app for QA assessment",
        "status": "inprogress",
        "id": 1
    }
]
````
