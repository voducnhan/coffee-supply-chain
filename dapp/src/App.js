import { Route, Switch, Redirect } from "react-router-dom";
import Farmer from "./components/farmer/Farmer";
import Distributor from "./components/distributor/Distributor";
import Retailer from "./components/retailer/Retailer";
import Consumer from "./components/consumer/Consumer";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import SupplyChain from "./components/supplyChain/SupplyChain";

function App() {

  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/farmer" component={Farmer} />
          <Route path="/distributor" component={Distributor} />
          <Route path="/retailer" component={Retailer} />
          <Route path="/consumer" component={Consumer} />
          <Route path="/supplychain" component={SupplyChain} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/supplychain" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
