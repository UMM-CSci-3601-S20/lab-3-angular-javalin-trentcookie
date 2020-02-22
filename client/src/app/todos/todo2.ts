export interface Todo {
  _id: string;
  owner: string;
  body: string;
  category: TodoCategory;
  status: boolean;
}



export type TodoCategory = "video games" | "software design" | "groceries" | "homework";

