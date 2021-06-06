import Toolbar from "./components/toolbar";
import Home from "./components/pages/Home";
import Footer from "./components/footer";
import Gems from "./components/pages/gems";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jewellery from "./components/pages/Jewellery";
import AllGems from "./components/pages/AllGems";
import ViewDetails from "./components/pages/ViewDetails";
import EditGem from "./components/pages/EditGem";
import CreateGem from "./components/pages/CreateGem";
import Signup from "./components/dashboard/signup";
import SignIn from "./components/dashboard/signin";
import AddGem from "./components/dashboard/addGem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Route exact path="/allgems" component={AllGems} />
          <Route exact path="/create-product" component={CreateGem} />
          {/* <Route  exat path="/edit" component={EditGem}>
            <Route  path="edit/:id" component={EditGem} />
          </Route> */}
          <Route exact path="/:id" component={ViewDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
