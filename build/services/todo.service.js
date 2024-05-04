"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createNewTodo = exports.getAllFromCurrentBoard = void 0;
const Todo_1 = require("../models/Todo");
const utilities_1 = require("../utilities/utilities");
const getAllFromCurrentBoard = (boardId, page) => __awaiter(void 0, void 0, void 0, function* () {
    const todosPerPage = 9;
    const currentPage = page || "1";
    const todos = yield Todo_1.TodoModel.find({ boardId }, "id title body index boardId status")
        .skip(todosPerPage * Number(currentPage) - todosPerPage)
        .limit(todosPerPage)
        .exec();
    const count = yield Todo_1.TodoModel.countDocuments({ boardId });
    const { previousPage, nextPage } = (0, utilities_1.calculatePages)(currentPage, count, todosPerPage);
    return {
        count,
        todos,
        previousPage,
        nextPage,
    };
});
exports.getAllFromCurrentBoard = getAllFromCurrentBoard;
const createNewTodo = (todoForCreating) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = new Todo_1.TodoModel(Object.assign({}, todoForCreating));
    const response = yield Todo_1.TodoModel.create(newTodo);
    return response;
});
exports.createNewTodo = createNewTodo;
const updateTodo = (todoForUpdate, todoId) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTodo = yield Todo_1.TodoModel.findByIdAndUpdate(todoId, Object.assign({}, todoForUpdate), { returnDocument: "after" });
    return updatedTodo;
});
exports.updateTodo = updateTodo;
const deleteTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    yield Todo_1.TodoModel.findByIdAndDelete(todoId);
});
exports.deleteTodo = deleteTodo;
