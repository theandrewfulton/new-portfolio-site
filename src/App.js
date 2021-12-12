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
import { Header } from "./scenes/header"
import { Social } from "./scenes/social"
import { Footer } from "./scenes/footer"

// import "page" scenes
import { Home } from "./scenes/home"
import { About } from "./scenes/about"
import { Projects } from "./scenes/projects"
import { Contact } from "./scenes/contact"

const App = () => {
  return (
    <>
        {/* React routes and paths */}
        <Router>
          {/* display the nav content, it needs to be inside the Router object to work correctly */}
          {/* <NavBar /> */}
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      {/* Add Social component here, may move later as it is in a different position on Contact page */}
      <Social />
      {/* display the footer content */}
      <Footer />
    </>
  )
}

export default App;
