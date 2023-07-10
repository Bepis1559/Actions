import { createBrowserRouter, redirect } from "react-router-dom";
import { Todos } from "../pages/Todos";
import { getAll } from "../services/read";
import { NewTodo } from "../pages/NewTodo";
import { searchFormInputName } from "../json/queryNames.json";
import axios from "axios";
const todosURL = "http://127.0.0.1:3000/todos";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    loader: async ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get(searchFormInputName);
      return getAll(`${todosURL}?q=${query ?? ""}`, signal as RequestInit);
    },
  },
  {
    path: "/new",
    element: <NewTodo />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get("title");
      if (title == "") return "title is required";
      await axios
        .post(todosURL, { title, completed: false }, { signal: request.signal })
        .then((res) => res)
        .catch((error) => console.log(error));
      return redirect("/");
    },
  },
]);
