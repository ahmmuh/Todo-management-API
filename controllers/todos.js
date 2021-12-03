import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    id: uuidv4(),
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "et porro tempora",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "et doloremque nulla",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
];
export const createTodo = (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, id: uuidv4() });
  res.send(`Todo with name ${todo.title} has been created`);
};

export const getTodos = (req, res) => {
  res.send(todos);
};

export const getTodo = (req, res) => {
  const { id } = req.params;
  const foundedTodo = todos.find((todo) => todo.id === id);
  res.send(foundedTodo);
};

export const updateTodo = (req, res) => {
  const { id } = req.body;
  const { title, completed } = req.body;
  const todo = todos.find((todo) => todo.id === id);

  if (todo.title) {
    todo.title = title;
    todo.completed = completed;
  }
  res.send(`Todo with id ${id} has been updated`);
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((todo) => todo.id !== id);
  res.send(`todo with Id ${id} has been deleted`);
};
