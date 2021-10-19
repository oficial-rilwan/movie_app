import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Watchlist from "./pages/watchlist/Watchlist";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/movies" component={Movies} />
      </Switch>
      <Switch>
        <Route path="/series" component={Series} />
      </Switch>
      <Switch>
        <Route path="/watchlist" component={Watchlist} />
      </Switch>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
