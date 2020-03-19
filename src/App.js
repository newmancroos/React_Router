import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Container from './components/Container';
function App() {
  return (
    <div>
      <Container/>
      <BrowserRouter>
        <Switch>    {/* Make sure always only oone route item display */}
          <Route path='/' exact component={Home} />
          <Route path='/about' exact  component={About} />
          <Route path='/post/:id' exact component={Post} />
          <Route path='/' render={() => <div>Page Not Found</div>} />        
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;