import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Banner from './pages/Banner/Banner';
import Menu from './pages/Home/Menu/Menu';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Breakfast from './pages/Home/Menu/Breakfast/Breakfast';
import Lunch from './pages/Home/Menu/Lunch/Lunch';
import Dinner from './pages/Home/Menu/Dinner/Dinner';

function App() {
  return (
      <Router>
        <Header></Header>
        <Banner></Banner>
        <Menu></Menu>
        <Switch>
          <Route path='/breakfast'>
            <Breakfast></Breakfast>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
        </Switch>
        <About></About>
        <Footer></Footer>
      </Router>
  );
}

export default App;
