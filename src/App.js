import React from 'react';
import { GlobalStyles } from './utils/globalStyles'
import { lightTheme, darkTheme } from './utils/themes';
import { ThemeProvider } from 'styled-components';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
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
      <HashRouter>
        <ThemeProvider theme={!checked ? lightTheme : darkTheme} >
          <GlobalStyles />
          <Navigation checked={checked} handleTheme={handleTheme} />
          <Switch>
            <PrivateRoute exact path={process.env.PUBLIC_URL + '/'}>
            </PrivateRoute>
            <PrivateRoute exact path={process.env.PUBLIC_URL + '/home'}>
              <Home checked={checked} />
            </PrivateRoute>
            <PrivateRoute exact path={process.env.PUBLIC_URL + '/projects'}>
              <Projects checked={checked} />
            </PrivateRoute>
            <PrivateRoute exact path={process.env.PUBLIC_URL + '/about'}>
              <AboutMe checked={checked} />
            </PrivateRoute>
            <PrivateRoute exact path={process.env.PUBLIC_URL + '/contact'}>
              <Contact checked={checked} />
            </PrivateRoute>
          </Switch>
        </ThemeProvider>
      </HashRouter>
  );
}

export default App;
