import React from 'react';
import Navigation from './components/Navigation';
import { GlobalStyles } from './utils/globalStyles'
import { lightTheme, darkTheme } from './utils/themes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
// import Footer from './components/Footer';
import AboutMe from './Views/AboutMe';


function App() {
  const [checked, setChecked] = React.useState(false)
  //Sets the theme of the site on toggle
  const handleTheme = async (checked) => {
    setChecked(checked)
  }

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={!checked ? lightTheme : darkTheme} >
          <GlobalStyles />
          <Navigation checked={checked} handleTheme={handleTheme} />
          <Switch>
            <Route exact path="/">
              <div className="min-vh-100 d-flex justify-content-center align-items-center">
                <h1 className="display-1">SUPP</h1>
              </div>
            </Route>
            <Route exact path="/home">
              <Home checked={checked} />
            </Route>
            <Route exact path="/projects">
              <Projects checked={checked} />
            </Route>
            <Route exact path="/about">
              <AboutMe checked={checked} />
            </Route>
            <Route exact path="/contact">
              <Contact checked={checked} />
            </Route>
          </Switch>
          {/* <Footer checked={checked} /> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
