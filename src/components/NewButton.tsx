import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function NewButton(): ReactElement {
  return (
    <div className="title-bts">
      <Link to={"/new"} className="btn">
        New
      </Link>
    </div>
  );
}
