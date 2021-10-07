import Layout from 'layouts/Layout';
import 'Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Index from 'pages/index';
import Login from 'pages/login';
import Registro from 'pages/registro';
import MaestroVtas from 'pages/maestroVtas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/login'>
            <Login/>
          </Route>
          <Route path = '/registro'>
            <Registro/>
          </Route>
        </Switch>
        <Layout>
          <Switch>
          <Route path ='/admin'>
              <MaestroVtas />
            </Route>
            <Route path ='/maestroVtas'>
              <MaestroVtas />
            </Route>
          </Switch>
        </Layout>
        <Switch>
        <Route path = '/'>
            <Index />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
