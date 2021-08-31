import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import SearchView from './views/SearchView/SearchView';
import MovieView from './views/MovieView/MovieView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <SearchView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
