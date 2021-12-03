import express from "express";
import router from "./routes/todos.js";
const app = express();

const PORT = 5000 | process.env.PORT;

app.use(router);

app.listen(PORT, () => console.log(`The server starting on port ${PORT}`));
