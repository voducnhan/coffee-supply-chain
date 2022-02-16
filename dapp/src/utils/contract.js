import Web3 from "web3";
import Artifact from "./Ownable.json";

const contract_address = "0x15391e8dD6812E7686E1F06Fa23A01D5aE6A7527";

class Contract {
  web3 = null;
  contract = null;
  account = null;

  constructor() {
    this.start();
  }

  start = async () => {
    // Connect to network
    if (window.ethereum) {
      // use MetaMask's provider
      this.web3 = new Web3(window.ethereum);

      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access");
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.set_account(accounts[0]);

      // Connect to contract
      this.contract_connect();
    } else {
      console.warn("No metamask detected");
    }
  };

  set_account = async (account) => {
    console.log("Set account:", account);
    this.account = account;
  };

  contract_connect = () => {
    try {
      this.contract = new this.web3.eth.Contract(
        Artifact.abi,
        contract_address
      );
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  };

  isFarmer = async (account) => {
    try {
      return await this.contract.methods.isFarmer(account).call();
    } catch {
      return false;
    }
  };

  addFarmer = async (account) => {
    const { addFarmer } = this.contract.methods;
    try {
      await addFarmer(account).send({ from: this.account });
      return true;
    } catch {
      return false;
    }
  };

  renounceFarmer = async () => {
    const { renounceFarmer } = this.contract.methods;
    try {
      await renounceFarmer().send({ from: this.account });
      return true;
    } catch (error) {
      return false;
    }
  };

  isDistributor = async (account) => {
    try {
      return await this.contract.methods.isDistributor(account).call();
    } catch {
      return false;
    }
  };

  addDistributor = async (account) => {
    const { addDistributor } = this.contract.methods;
    try {
      await addDistributor(account).send({ from: this.account });
      return true;
    } catch {
      return false;
    }
  };

  renounceDistributor = async () => {
    const { renounceDistributor } = this.contract.methods;
    try {
      await renounceDistributor().send({ from: this.account });
      return true;
    } catch (error) {
      return false;
    }
  };

  isRetailer = async (account) => {
    try {
      return await this.contract.methods.isRetailer(account).call();
    } catch {
      return false;
    }
  };

  addRetailer = async (account) => {
    const { addRetailer } = this.contract.methods;
    try {
      await addRetailer(account).send({ from: this.account });
      return true;
    } catch {
      return false;
    }
  };

  renounceRetailer = async () => {
    const { renounceRetailer } = this.contract.methods;
    try {
      await renounceRetailer().send({ from: this.account });
      return true;
    } catch (error) {
      return false;
    }
  };

  isConsumer = async (account) => {
    try {
      return await this.contract.methods.isConsumer(account).call();
    } catch {
      return false;
    }
  };

  addConsumer = async (account) => {
    const { addConsumer } = this.contract.methods;
    try {
      await addConsumer(account).send({ from: this.account });
      return true;
    } catch {
      return false;
    }
  };

  renounceConsumer = async () => {
    const { renounceConsumer } = this.contract.methods;
    try {
      await renounceConsumer().send({ from: this.account });
      return true;
    } catch (error) {
      return false;
    }
  };

  harvestItem = async (upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes) => {
    const { harvestItem } = this.contract.methods;
    await harvestItem(upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes).send({ from: this.account });
  };

  processItem = async (upc) => {
    const { processItem } = this.contract.methods;
    await processItem(upc).send({ from: this.account });
  };

  packItem = async (upc) => {
    const { packItem } = this.contract.methods;
    await packItem(upc).send({ from: this.account });
  };

  sellItem = async (upc, price) => {
    const { sellItem } = this.contract.methods;
    await sellItem(upc, price).send({ from: this.account });
  };

  buyItem = async (upc, price) => {
    const { buyItem } = this.contract.methods;
    await buyItem(upc).send({ from: this.account, value: price });
  };

  shipItem = async (upc) => {
    const { shipItem } = this.contract.methods;
    await shipItem(upc).send({ from: this.account });
  };

  receiveItem = async (upc) => {
    const { receiveItem } = this.contract.methods;
    await receiveItem(upc).send({ from: this.account });
  };

  purchaseItem = async (upc) => {
    const { purchaseItem } = this.contract.methods;
    await purchaseItem(upc).send({ from: this.account });
  };

  fetchItemBufferOne = async (upc) => {
    const { fetchItemBufferOne } = this.contract.methods;
    return await fetchItemBufferOne(upc).call();
  };

  fetchItemBufferTwo = async (upc) => {
    const { fetchItemBufferTwo } = this.contract.methods;
    return await fetchItemBufferTwo(upc).call();
  };
}

const contract = new Contract();
if (window.ethereum) {
  // Time to reload your interface with accounts[0]!
  window.ethereum.on("accountsChanged", function (accounts) {
    contract.set_account(accounts[0]);
  });
}
export default contract;
