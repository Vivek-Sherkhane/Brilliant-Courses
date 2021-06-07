import React from 'react';
import { BrowserRouter, Route,Link,Switch} from 'react-router-dom';
import './App.css';
import Description from './components/Description';
import DescriptionCard from './components/DescriptionCard';
import Tasks from './components/Tasks';
import WarmuPuzzles from './components/Warmup-puzzles';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Main}></Route>
      <Route exact path="/warmup-puzzles" component={WarmuPuzzles}></Route>
    </BrowserRouter>
  );
}

export default App;
