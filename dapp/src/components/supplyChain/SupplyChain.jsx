import { Component } from "react";
import Web3 from "web3";
import contract from "../../utils/contract.js";
import FecthDataForm from "./FecthDataForm";

export default class SupplyChain extends Component {
  state = {
    data: {
      sku: 1,
      upc: 1,
      ownerID: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
      originFarmerID: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
      originFarmName: "John Doe",
      originFarmInformation: "Yarray Valley",
      originFarmLatitude: "-38.239770",
      originFarmLongitude: "144.341490",
      productNotes: "Best beans for Espresso",
      productPrice: "1",
      distributorID: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
      retailerID: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
      consumerID: "0xEd77E21c3898AE23646969BE3Dc0292C755F8bFC",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data });
  };

  harvestItem = async () => {
    const {
      upc,
      originFarmerID,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude,
      productNotes,
    } = this.state.data;

    await contract.harvestItem(
      upc,
      originFarmerID,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude,
      productNotes
    );
  };

  processItem = async () => {
    const { upc } = this.state.data;
    await contract.processItem(upc);
  };

  packItem = async () => {
    const { upc } = this.state.data;
    await contract.packItem(upc);
  };

  sellItem = async () => {
    const { upc, productPrice } = this.state.data;
    const priceInWei = Web3.utils.toWei(productPrice, "ether");
    await contract.sellItem(upc, priceInWei);
  };

  buyItem = async () => {
    const { upc, productPrice } = this.state.data;
    const priceInWei = Web3.utils.toWei(productPrice, "ether");
    await contract.buyItem(upc, priceInWei);
  };

  shipItem = async () => {
    const { upc } = this.state.data;
    await contract.shipItem(upc);
  };

  receiveItem = async () => {
    const { upc } = this.state.data;
    await contract.receiveItem(upc);
  };

  purchaseItem = async () => {
    const { upc } = this.state.data;
    await contract.purchaseItem(upc);
  };

  render() {
    const {
      sku,
      upc,
      ownerID,
      originFarmerID,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude,
      productNotes,
      productPrice,
      distributorID,
      retailerID,
      consumerID,
    } = this.state.data;

    return (
      <div>
        <div className="row">
          <div className="col-3 btn btn-primary" onClick={this.harvestItem}>
            1. Harvest
          </div>
          <div className="col-3 btn btn-secondary" onClick={this.processItem}>
            2. Process
          </div>
          <div className="col-3 btn btn-success" onClick={this.packItem}>
            3. Pack
          </div>
          <div className="col-3 btn btn-danger" onClick={this.sellItem}>
            4. ForSale
          </div>
          <div className="col-3 btn btn-warning" onClick={this.buyItem}>
            5. Buy
          </div>
          <div className="col-3 btn btn-info" onClick={this.shipItem}>
            6. Ship
          </div>
          <div className="col-3 btn btn-light" onClick={this.receiveItem}>
            7. Receive
          </div>
          <div className="col-3 btn btn-dark" onClick={this.purchaseItem}>
            8. Purchase
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-2">
            {/* <div>
              SKU: <input id="sku" value={sku} onChange={this.handleChange} />
            </div> */}
            <div>
              UPC: <input id="upc" value={upc} onChange={this.handleChange} />
            </div>
            {/* <div>
              Current Owner ID:
              <input
                id="ownerID"
                value={ownerID}
                onChange={this.handleChange}
              />
            </div> */}
            <div>
              Farmer ID:
              <input
                id="originFarmerID"
                value={originFarmerID}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Farm Name:
              <input
                id="originFarmName"
                value={originFarmName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Farm Infomation:
              <input
                id="originFarmInformation"
                value={originFarmInformation}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Farm Latitude:
              <input
                id="originFarmLatitude"
                value={originFarmLatitude}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Farm Longitude:
              <input
                id="originFarmLongitude"
                value={originFarmLongitude}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Product Notes:
              <input
                id="productNotes"
                value={productNotes}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Product Price:
              <input
                id="productPrice"
                value={productPrice}
                onChange={this.handleChange}
              />
              ETH
            </div>
            {/* <div>
              Distributor ID:
              <input
                id="distributorID"
                value={distributorID}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Retailer ID:
              <input
                id="retailerID"
                value={retailerID}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Consumer ID:
              <input
                id="consumerID"
                value={consumerID}
                onChange={this.handleChange}
              />
            </div> */}
          </div>
        </div>
        <hr />
        <div className="bg-light col-6 mt-3">
          <FecthDataForm />
        </div>
      </div>
    );
  }
}
