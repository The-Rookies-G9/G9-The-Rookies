import Layout from 'layouts/layout';
import 'Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
            <Route path='/maestroVtas'>
              <MaestroVtas />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
