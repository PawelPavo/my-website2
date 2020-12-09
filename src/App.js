import React from 'react';
import { GlobalStyles } from './utils/globalStyles'
import { lightTheme, darkTheme } from './utils/themes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
import AboutMe from './Views/AboutMe';
import Navigation from './components/Navigation';


function App() {
  const [checked, setChecked] = React.useState(false)
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
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
