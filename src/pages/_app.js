import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://img.icons8.com/windows/480/000000/batman-new.png"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/projects" component={ProjectsPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            color="light"
            size="normal"
            backgroundImage=""
            backgroundImageOpacity={1}
            logo="https://img.icons8.com/windows/480/000000/batman-new.png"
            copyright="© 2019 Mister Rogers"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
