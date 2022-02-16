import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class CheckForm extends Form {
  state = {
    data: {
      account: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
    },
    errors: {},
    isDistributor: null,
  };

  schema = {
    account: Joi.string().required().label("Account"),
  };

  doSubmit = async () => {
    this.setState({ isDistributor: null });
    const { account } = this.state.data;
    const isDistributor = await contract.isDistributor(account);
    this.setState({ isDistributor });
  };

  render() {
    const { isDistributor } = this.state;
    return (
      <div>
        <h1>Check Distributor</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("account", "Account")}
          {this.renderButton("Check")}
        </form>
        {isDistributor !== null && (
          <div>
            {isDistributor === true ? "This is a Distributor" : "This is not a Distributor"}
          </div>
        )}
      </div>
    );
  }
}
