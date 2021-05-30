// import "./styles/css/bootstrap-theme.css";
// import "./styles/css/bootstrap-theme.css.map";
// import "./styles/css/bootstrap-theme.min.css";
// import "./styles/css/bootstrap.css";
// import "./styles/css/bootstrap.css.map";
// import "./styles/css/bootstrap.min.css";
// import "./styles/css/bootstrap.min.css.map";
// import "./styles/css/style.css";

import Toolbar from "./components/toolbar";
import Home from "./components/pages/Home";
import Footer from './components/footer';
import Content from './components/contant';

function App() {
  return (
    <div>
      <Toolbar/>
      {/* <Home/> */}
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
