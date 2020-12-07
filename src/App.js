import React from 'react';
import { GlobalStyles } from './utils/globalStyles'
import { lightTheme, darkTheme } from './utils/themes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import NavigationDesktop from './components/NavigationDesktop';

import Home from './Views/Home';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
// import Footer from './components/Footer';
import AboutMe from './Views/AboutMe';


function App() {
  const [checked, setChecked] = React.useState(false)
  const handleTheme = async (checked) => {
    setChecked(checked)
  }

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;

  React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={!checked ? lightTheme : darkTheme} >
          <GlobalStyles />
          {width < breakpoint ? <Navigation checked={checked} handleTheme={handleTheme} /> : <NavigationDesktop checked={checked} handleTheme={handleTheme}/>}
          {/* <Navigation checked={checked} handleTheme={handleTheme} /> */}
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
          {/* <Footer checked={checked} /> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
