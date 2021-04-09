import './App.css';
import Layout from './Pages/Layout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Homepage from './Pages/Homepage/Homepage';
import Section from './Components/Section/Section';
import CameoDetail from './Pages/CameoDetail/CameoDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(16, 16, 16)'
    },
    secondary: {
      main: 'rgb(255, 255, 255)'
    },
    text: {
      primary: 'rgb(255, 255, 255)'
    }
  }
})

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Layout>

            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route exact path="/detail/:id"><CameoDetail /></Route>
            </Switch>

          </Layout>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
