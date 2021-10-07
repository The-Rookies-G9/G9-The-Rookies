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
          <Route to = '/login'>
            <Login/>
          </Route>
          <Route to = '/registro'>
            <Registro/>
          </Route>
        </Switch>
        <Layout>
          <Switch>
            <Route to ='/maestroVtas'>
              <MaestroVtas />
            </Route>
            <Route to = '/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
