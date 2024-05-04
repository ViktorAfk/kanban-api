"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberValid = exports.calculatePages = void 0;
const calculatePages = (currentPage, count, todosPerPage) => {
    const nextPageCount = parseInt(currentPage) + 1;
    const previousPageCount = parseInt(currentPage) - 1;
    const hasNextPage = nextPageCount <= Math.ceil(count / todosPerPage);
    const hasPreviousPage = previousPageCount >= 1;
    return {
        nextPage: hasNextPage ? nextPageCount : null,
        previousPage: hasPreviousPage ? previousPageCount : null,
    };
};
exports.calculatePages = calculatePages;
const isNumberValid = (page) => {
    if (Number.isNaN(page) || !isFinite(page) || page <= 0) {
        return false;
    }
    return true;
};
exports.isNumberValid = isNumberValid;
