import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line no-console
export const catchError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  } else {
    next();
  }
};

export const checkRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.body) {
    console.log(req.body);
    res.status(400).send("Invalid request body");
  } else {
    next();
  }
};

export const checkPostReqBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, body, boardId, status, index } = req.body;

  if (!title || !body || !boardId || !status || !index) {
    res.status(400).send("Invalid request body");
  } else {
    next();
  }
};

export const checkReqParams = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { board } = req.params;
  console.log(board);
  if (board) {
    res.status(400).send("Invalid request body");
  } else {
    next();
  }
};
