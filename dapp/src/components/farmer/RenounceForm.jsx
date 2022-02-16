import { Component } from "react";
import contract from "../../utils/contract.js";

export default class RenounceForm extends Component {
  state = {
    errors: {},
    result: null,
  };

  doSubmit = async () => {
    const result = await contract.renounceFarmer();
    this.setState({ result });
  };

  render() {
    const { data, result } = this.state;
    return (
      <div>
        <h1>Renounce farmer</h1>
        <button className="btn btn-dark" onClick={this.doSubmit}>
          Renounce
        </button>
        {result !== null && (
          <div>
            {result === true ? "You are not farmer now" : "Some error happend"}
          </div>
        )}
      </div>
    );
  }
}
