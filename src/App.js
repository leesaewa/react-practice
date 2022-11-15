// router를 render시키는 App.js파일

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./scss/Style.scss";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/group/">
          <Group />
        </Route> */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
