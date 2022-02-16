import Joi from "joi-browser";
import Form from "../common/Form";
import contract from "../../utils/contract.js";

export default class FecthDataForm extends Form {
  state = {
    data: {
      upc: "1",
    },
    errors: {},
    result: {},
  };

  schema = {
    upc: Joi.string().required().label("UPC"),
  };

  doSubmit = async () => {
    this.setState({ result: null });
    const { account } = this.state.data;
    const result = await contract.addFarmer(account);
    this.setState({ result });
  };

  fetchItemBufferOne = async () => {
    const { upc } = this.state.data;
    const result = await contract.fetchItemBufferOne(upc);
    this.setState({ result });
  };

  fetchItemBufferTwo = async () => {
    const { upc } = this.state.data;
    const result = await contract.fetchItemBufferTwo(upc);
    this.setState({ result });
  };

  render() {
    const { result } = this.state;
    console.log(result);
    return (
      <div>
        <h1>Fetch Data</h1>
        {this.renderInput("upc", "UPC")}
        <button
          className="btn btn-primary mr-2"
          onClick={this.fetchItemBufferOne}
        >
          FetchOne
        </button>
        <button className="btn btn-primary" onClick={this.fetchItemBufferTwo}>
          FetchTwo
        </button>
        <div className="mt-2">
          {result.itemSKU && <div>SKU:{result.itemSKU}</div>}
          {result.itemUPC && <div>UPC:{result.itemUPC}</div>}
          {result.ownerID && <div>Owner ID:{result.ownerID}</div>}
          {result.originFarmerID && (
            <div>Origin Farmer ID:{result.originFarmerID}</div>
          )}
          {result.originFarmName && (
            <div>Origin Farm Name:{result.originFarmName}</div>
          )}
          {result.originFarmInformation && (
            <div>Origin Farm Infomation:{result.originFarmInformation}</div>
          )}
          {result.originFarmLatitude && (
            <div>Origin Farm Latitude:{result.originFarmLatitude}</div>
          )}
          {result.originFarmLongitude && (
            <div>Origin Farm Longitude:{result.originFarmLongitude}</div>
          )}
          {result.productID && <div>Product ID:{result.productID}</div>}
          {result.productNotes && (
            <div>Product Notes:{result.productNotes}</div>
          )}
          {result.productPrice && (
            <div>Product Price:{result.productPrice}</div>
          )}
          {result.itemState && <div>Item State:{result.itemState}</div>}
          {result.distributorID && (
            <div>Distributor ID:{result.distributorID}</div>
          )}
          {result.retailerID && <div>Retailer ID:{result.retailerID}</div>}
          {result.consumerID && <div>Consumer ID:{result.consumerID}</div>}
        </div>
      </div>
    );
  }
}
