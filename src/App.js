import Toolbar from "./components/toolbar";
import Home from "./components/pages/Home";
import Footer from "./components/footer";
import Gems from "./components/pages/gems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jewellery from "./components/pages/Jewellery";
import PreciousGems from "./components/pages/PreciousGems";
import ViewDetails from "./components/pages/ViewDetails";
import EditGem from "./components/pages/EditGem";
import CreateGem from "./components/pages/CreateGem";
import Signup from "./components/dashboard/signup";
import SignIn from "./components/dashboard/signin";
import AddGem from "./components/dashboard/addGem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SemiPreciousGems from "./components/pages/SemiPreciousGems";
import GemsData from "./components/dashboard/gemsData";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Toolbar />
        <Switch>
          <Route exact path="/addgem" component={AddGem} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={Home} />
          <Route exact path="/gem" component={Gems} />
          <Route exact path="/jewellery" component={Jewellery} />
          <Route exact path="/pgems" component={PreciousGems} />
          <Route exact path="/spgems" component={SemiPreciousGems} />
          <Route exact path="/create-product" component={CreateGem} />
          <Route exact path="/gemsdata" component={GemsData} />

          {/* <Route  path="edit/:id" component={EditGem} /> */}
          {/* <Route path={`/edit`} component={EditGem} /> */}

          {/* <Router basename="/edit" component={EditGem}>
            <Link to="/:id" />
          </Router> */}
          <Route path="/edit" component={EditGem}>
            <Route path="/edit/:uid" component={EditGem} />
          </Route>

          <Route exact path="/:id" component={ViewDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
