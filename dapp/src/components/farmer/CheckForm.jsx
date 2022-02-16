import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class CheckForm extends Form {
  state = {
    data: {
      account: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
    },
    errors: {},
    isFarmer: null,
  };

  schema = {
    account: Joi.string().required().label("Account"),
  };

  doSubmit = async () => {
    this.setState({ isFarmer: null });
    const { account } = this.state.data;
    const isFarmer = await contract.isFarmer(account);
    this.setState({ isFarmer });
  };

  render() {
    const { isFarmer } = this.state;
    return (
      <div>
        <h1>Check farmer</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("account", "Account")}
          {this.renderButton("Check")}
        </form>
        {isFarmer !== null && (
          <div>
            {isFarmer === true ? "This is a Farmer" : "This is not a Farmer"}
          </div>
        )}
      </div>
    );
  }
}
