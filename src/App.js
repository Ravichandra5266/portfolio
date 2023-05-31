import Home from "./Components/Home";

import Projects from "./Components/Projects";

import Certificates from "./Components/Certificates";

import { Switch, Route } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/certificates" component={Certificates} />
  </Switch>
);

export default App;
