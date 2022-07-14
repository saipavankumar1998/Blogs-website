import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CreateBlog from "./CreateBlog";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/CreateBlog">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
