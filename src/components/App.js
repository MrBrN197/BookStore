import { Route, Switch } from 'react-router-dom';
import Header from '../view/Header';
import BooksPage from './BooksPage';
import CategoriesPage from './CategoriesPage';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route>
        <CategoriesPage />
      </Route>
    </Switch>
  </>
);

export default App;
