import React from "react";
import CheckForm from "./CheckForm";
import AddForm from "./AddForm";
import RenounceForm from "./RenounceForm";

export default function Consumer() {
  return (
    <div className="row">
      <div className="col-4">
        <CheckForm />
      </div>
      <div className="col-4">
        <AddForm />
      </div>
      <div className="col-4">
        <RenounceForm />
      </div>
    </div>
  );
}
