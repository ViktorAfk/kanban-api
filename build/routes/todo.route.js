"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("../controllers/todo.controller");
const midlewares_1 = require("../midleware/midlewares");
const todoRouter = express_1.default.Router();
exports.todoRouter = todoRouter;
todoRouter.get("/:boardId", todo_controller_1.getTodos);
todoRouter.post("/", midlewares_1.checkPostReqBody, todo_controller_1.addTodo);
todoRouter.patch("/:id", midlewares_1.checkRequestBody, todo_controller_1.patchTodo);
todoRouter.delete("/:id", todo_controller_1.removeTodo);
todoRouter.use(midlewares_1.catchError);
