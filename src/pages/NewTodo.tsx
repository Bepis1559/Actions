import { ReactElement } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export function NewTodo(): ReactElement {
  const errorMessage = useActionData() as string;
  const { state } = useNavigation();
  const isSubmitting = state == "submitting" || state == "loading";

  return (
    <main className="container">
      <h1>New Todo</h1>
      <Form method="post" className="form">
        <div>{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to={".."} className="btn btn-outline">
            Back
          </Link>
          <button disabled={isSubmitting} className="btn" type="submit">
            {isSubmitting ? "Loading" : "Create"}
          </button>
        </div>
      </Form>
    </main>
  );
}
