import express from "express";
import todos from "./database.js";

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
  res.status(200).json(todos);
});

server.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

server.get("/todos/:id", (req, res) => {
  res
    .status(200)
    .json({ data: todos.find((todo) => todo.id == req.params.id) });
});

server.post('/todos', (req, res) => {

    todos.push(todoJson);

    res.status(201).json({ 
        msg: "Todo created successfully",
        todoJson
    });

});

// Update put /todos:id

// delete delete /todos:id

export { server };
