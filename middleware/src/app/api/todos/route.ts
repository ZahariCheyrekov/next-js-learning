import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();

  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title) {
    return NextResponse.json({ message: "Missing userId ot todo title" });
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json({
    message: `Todo with id ${newTodo.id} was created.`,
    newTodo,
  });
}

export async function PUT(request: Request) {
  const { id, userId, title, completed }: Todo = await request.json();

  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ message: "Missing required data" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json({
    message: `Todo with id ${updatedTodo.id} was updated.`,
    updatedTodo,
  });
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "Todo id is required" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });
  const todos: Todo[] = await res.json();

  return NextResponse.json({ message: `Todo with id ${id} was deleted.` });
}