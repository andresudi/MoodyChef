import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherPage from "./containers/WeatherPage";
import RecipePage from "./containers/RecipePage";
import NotFoundPage from './containers/NotFoundPage'
import RecipeDetailPage from './containers/RecipeDetailPage'
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux'
import store from './redux/store/index'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={RecipePage} />
            <Route path="/weather" component={WeatherPage} />
            <Route path='/recipe/:id' component={RecipeDetailPage}/>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
