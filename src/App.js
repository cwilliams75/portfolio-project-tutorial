import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/">
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value:30,
              density: {
                enable: true,
                value_area:900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
        />
      <Navbar />
      <Header />
      
      </Route>
      <Link>
           <Route path="/about" component={Navbar}> 
          {/* <Contact></Contact> */}
           </Route> 
      </Link>
        </Switch>
      
      </Router>
    </>
  );
}

export default App;
