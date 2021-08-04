import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import "./assets/bootstrap.min.css";
// import "./assets/fontawesome/css/all.min.css";
import Posts from "./admin/screens/Posts";
import Categories from "./admin/screens/Categories";
import HomeScreen from "./screens/HomeScreen";
import CreatePost from "./admin/screens/CreatePost";
import AdminDashboard from "./admin/screens/AdminDashboard";

import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/posts" component={Posts} />
          <Route exact path="/admin/categories" component={Categories} />
          <Route exact path="/admin/posts/CreatePost" component={CreatePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
