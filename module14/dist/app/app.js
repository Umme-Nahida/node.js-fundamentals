"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const todosRoute_1 = require("./todos/todosRoute");
const filePath = path_1.default.join(__dirname, '../../DB/todo.json');
// all middleware 
app.use(express_1.default.json());
app.use('/todos', todosRoute_1.todosRouter);
app.get('/', (req, res) => {
    res.send('this is my todos project');
});
app.post('/createTodo', (req, res) => {
    console.log('created todo route');
    res.send('created todo');
});
app.get('/users', (req, res) => {
    console.log('this is user route');
    res.send('this is users');
});
app.get('/todo', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    console.log(req.body);
    res.send(JSON.parse(data));
});
exports.default = app;
