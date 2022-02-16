import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class AddForm extends Form {
  state = {
    data: {
      account: "0xA6C636322506e9ba94176D3bb766d0A9C8cD9Bc3",
    },
    errors: {},
    result: null,
  };

  schema = {
    account: Joi.string().required().label("Account"),
  };

  doSubmit = async () => {
    this.setState({ result: null });
    const { account } = this.state.data;
    const result = await contract.addDistributor(account);
    this.setState({ result });
  };

  render() {
    const { data, result } = this.state;
    return (
      <div>
        <h1>Add Distributor</h1>
        <div className="text-white bg-danger rounded text-center">
          You have to be a Distributor to add new Distributor
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("account", "Account")}
          {this.renderButton("Add")}
        </form>
        {result !== null && (
          <div>
            {result === true
              ? "New Distributor: " + data.account
              : "Some error happend"}
          </div>
        )}
      </div>
    );
  }
}
