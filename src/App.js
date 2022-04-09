import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Bill from "./components/Bill";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Login from './components/Login';
import NotFound from './components/NotFound';
import Header from "./components/Header";
import POC from "./components/POC";
import FormPOC from "./components/FormPOC";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/bills" component={Bill} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/poc" component={POC} />
          <Route exact path="/form" component={FormPOC} />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
