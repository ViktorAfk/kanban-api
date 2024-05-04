import { Status } from "./types";

export interface Todo {
  title: string;
  body: string;
  status: string;
  boardId: Status;
  index: number;
}
