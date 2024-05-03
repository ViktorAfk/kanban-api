import { NextFunction, Request, Response } from 'express';

export const catchError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(500).send('Internal Server Error: ' + err.message);
};

export const checkRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.body?.todo) {
    res.status(400).send('Invalid request body');
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
    res.status(400).send('Invalid request body');
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
  if (!board) {
    res.status(400).send('Invalid request body');
  } else {
    next();
  }
};
