// delete logo svg
// import logo from './logo.svg';

// import react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// remember to edit css
// there's also an index.css, check there if you are having issues
import './App.css';

// import scenes
import { NavBar } from "./scenes/nav"
import { Footer } from "./scenes/footer"

// import "page" scenes
import { Home } from "./scenes/home"
import { About } from "./scenes/about"

const App = () => {
  return (
    <>
      {/* React routes and paths */}
      <Router>
        {/* display the nav content, it needs to be inside the Router object to work correctly */}
        <NavBar />
        <Switch>
        <Route path="/about">
              <About />
            </Route>
          <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
      {/* display the footer content */}
      <Footer />
    </>
  )
}

export default App;
