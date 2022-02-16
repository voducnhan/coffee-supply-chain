import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class CheckForm extends Form {
  state = {
    data: {
      account: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
    },
    errors: {},
    isConsumer: null,
  };

  schema = {
    account: Joi.string().required().label("Account"),
  };

  doSubmit = async () => {
    this.setState({ isConsumer: null });
    const { account } = this.state.data;
    const isConsumer = await contract.isConsumer(account);
    this.setState({ isConsumer });
  };

  render() {
    const { isConsumer } = this.state;
    return (
      <div>
        <h1>Check Consumer</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("account", "Account")}
          {this.renderButton("Check")}
        </form>
        {isConsumer !== null && (
          <div>
            {isConsumer === true ? "This is a Consumer" : "This is not a Consumer"}
          </div>
        )}
      </div>
    );
  }
}
