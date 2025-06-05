"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, '../../../DB/todo.json');
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => {
    console.log('hei ami todos route ');
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    console.log(req.body);
    res.send(JSON.parse(data));
});
