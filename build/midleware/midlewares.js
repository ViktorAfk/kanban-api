"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkReqParams = exports.checkPostReqBody = exports.checkRequestBody = exports.catchError = void 0;
// eslint-disable-next-line no-console
const catchError = (err, req, res, next) => {
    if (err) {
        res.status(500).send("Internal Server Error: " + err.message);
    }
    else {
        next();
    }
};
exports.catchError = catchError;
const checkRequestBody = (req, res, next) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.todo)) {
        res.status(400).send("Invalid request body");
    }
    else {
        next();
    }
};
exports.checkRequestBody = checkRequestBody;
const checkPostReqBody = (req, res, next) => {
    const { title, body, boardId, status, index } = req.body;
    if (!title || !body || !boardId || !status || !index) {
        res.status(400).send("Invalid request body");
    }
    else {
        next();
    }
};
exports.checkPostReqBody = checkPostReqBody;
const checkReqParams = (req, res, next) => {
    const { board } = req.params;
    console.log(board);
    if (board) {
        res.status(400).send("Invalid request body");
    }
    else {
        next();
    }
};
exports.checkReqParams = checkReqParams;
