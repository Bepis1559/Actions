import { ReactElement } from "react";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { SearchForm } from "../components/SearchForm";
import { NewButton } from "../components/NewButton";
import { searchFormInputName } from "../json/queryNames.json";

// Hey Kyle ! Isn't it a lot better instead of using refs and getting the url from useLoaderData()
// to just get it from useSearchParams() like I have done here :
export function Todos(): ReactElement {
  const todos = useLoaderData() as todo[];
  const { state } = useNavigation();
  const searchParams = useSearchParams();
  const queryValue = searchParams[0].get(searchFormInputName) ?? "";

  return state == "submitting" || state == "loading" ? (
    <h1>Loading...</h1>
  ) : (
    <main className="container">
      <h1 className="page-title">
        Todos
        <NewButton />
      </h1>

      <SearchForm inputDefaultValue={queryValue} />
      <ul>
        {todos.map(({ completed, title, id }) => (
          <li key={id} className={completed ? "strike-through" : ""}>
            {title}
          </li>
        ))}
      </ul>
    </main>
  );
}
