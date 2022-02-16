import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class CheckForm extends Form {
  state = {
    data: {
      account: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
    },
    errors: {},
    isRetailer: null,
  };

  schema = {
    account: Joi.string().required().label("Account"),
  };

  doSubmit = async () => {
    this.setState({ isRetailer: null });
    const { account } = this.state.data;
    const isRetailer = await contract.isRetailer(account);
    this.setState({ isRetailer });
  };

  render() {
    const { isRetailer } = this.state;
    return (
      <div>
        <h1>Check Retailer</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("account", "Account")}
          {this.renderButton("Check")}
        </form>
        {isRetailer !== null && (
          <div>
            {isRetailer === true ? "This is a Retailer" : "This is not a Retailer"}
          </div>
        )}
      </div>
    );
  }
}
