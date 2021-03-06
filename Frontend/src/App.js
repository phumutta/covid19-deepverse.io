// IMPORT REACT MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import axios from 'axios';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import { Scale } from 'styled-loaders-react';
//import Panel from './components/Panel';

// IMPORT PAGES
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Blog from './pages/Blog';
import About from './pages/About';
// import Donate from './pages/Donate';

// IMPORT SCSS
import './assets/sass/_main.scss';
import 'leaflet/dist/leaflet.css';

// MAINc

const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(false), 4000);
  });
};
class App extends React.Component {
  state = {
    data: {},
    country: '',
    isLoaded: true,
  };

  async componentDidMount() {
    const isLoaded = await asyncFunc();
    this.setState({ isLoaded });

    //test call api from port 5000
    // axios.get('/getCountry').then(res=>{
    //   console.log(res)
    // })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeLisener);
  }
  render() {
    return (
      <div className="App">
        {this.state.isLoaded ? (
          <div className="loading">
            <Scale color="#FFFFFF" size="50px" duration="1.4s" />
          </div>
        ) : (
          <Router>
            <Navbar className="app_navbar" />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/statistics" component={Statistics} />
              {/* <Route path="/donate" component={Donate} /> */}
              <Route
                path="/donate"
                component={() => {
                  window.location.href =
                    'https://www.buymeacoffee.com/khawoat6';
                  return null;
                }}
              />
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
            </Switch>
            {/* <Panel className="app_panel" /> */}
          </Router>
        )}
      </div>
    );
  }
}
export default App;
