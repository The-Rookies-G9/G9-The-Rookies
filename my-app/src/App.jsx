
import 'Styles/App.css';
import MaestroVtas from 'pages/maestroVtas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/maestroVtas'>
            <MaestroVtas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
