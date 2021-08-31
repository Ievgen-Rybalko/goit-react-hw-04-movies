import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
//import HomeView from './views/HomeView/HomeView';
//import SearchView from './views/SearchView/SearchView';
//import OneMovieView from './views/OneMovieView/OneMovieView';
//import NotFoundView from './views/NotFoundView/NotFoundView';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js' /* webpackChunkName: "HomeView"*/),
);
const SearchView = lazy(() =>
  import(
    './views/SearchView/SearchView.js' /* webpackChunkName: "SearchView"*/
  ),
);
const OneMovieView = lazy(() =>
  import(
    './views/OneMovieView/OneMovieView.js' /* webpackChunkName: "OneMovieView"*/
  ),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView.js' /* webpackChunkName: "NotFoundView"*/
  ),
);

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <SearchView />
          </Route>

          <Route path="/movies/:movieId">
            <OneMovieView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
