import { ReactElement } from "react";
import { Form } from "react-router-dom";
import { searchFormInputName } from "../json/queryNames.json";

type props = {
  inputDefaultValue: string;
};

export function SearchForm({ inputDefaultValue }: props): ReactElement {
  return (
    <Form className="form" action="">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={searchFormInputName}>Search</label>
          <input
            defaultValue={inputDefaultValue}
            type="search"
            name={searchFormInputName}
            id={searchFormInputName}
          />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </div>
    </Form>
  );
}
