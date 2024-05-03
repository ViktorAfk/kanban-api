export const calculatePages = (
  currentPage: string,
  count: number,
  todosPerPage: number,
) => {
  const nextPageCount = parseInt(currentPage) + 1;
  const previousPageCount = parseInt(currentPage) - 1;
  const hasNextPage = nextPageCount <= Math.ceil(count / todosPerPage);
  const hasPreviousPage = previousPageCount >= 1;

  return {
    nextPage: hasNextPage ? nextPageCount : null,
    previousPage: hasPreviousPage ? previousPageCount : null,
  };
};

export const isNumberValid = (page: number) => {
  if (Number.isNaN(page) || !isFinite(page) || page <= 0) {
    return false;
  }

  return true;
};
