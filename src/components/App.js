import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route>
        <Categories />
      </Route>
    </Switch>
  </>
);

export default App;
