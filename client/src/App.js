import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestList from './pages/RequestList';
import EditRequest from './pages/EditRequest';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/requestList' component={RequestList}/>
        <Route path='/editRequest/:id' component={EditRequest}/>
      </Switch>
    </Router>
  );
}

export default App;
