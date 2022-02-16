import { Component } from "react";
import contract from "../../utils/contract.js";

export default class RenounceForm extends Component {
  state = {
    errors: {},
    result: null,
  };

  doSubmit = async () => {
    const result = await contract.renounceDistributor();
    this.setState({ result });
  };

  render() {
    const { data, result } = this.state;
    return (
      <div>
        <h1>Renounce Distributor</h1>
        <button className="btn btn-dark" onClick={this.doSubmit}>
          Renounce
        </button>
        {result !== null && (
          <div>
            {result === true ? "You are not Distributor now" : "Some error happend"}
          </div>
        )}
      </div>
    );
  }
}
