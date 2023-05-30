import Home from "./Components/Home";

import Projects from "./Components/Projects";

import { Switch, Route } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);

export default App;
