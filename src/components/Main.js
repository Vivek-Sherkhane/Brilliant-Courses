import React from 'react'
import Description from './Description';
import DescriptionCard from './DescriptionCard';
import Tasks from './Tasks';
import { BrowserRouter, Route,Link,Switch} from 'react-router-dom';
import Header from './Header';
function Main() {
    return (
        <div className="grid-container">
            <Header/>
        <main>
          <div className="main">
          <Description/>
          <DescriptionCard/>
          </div>
        </main>
        <div className="main-tasks-container">
        <Tasks/>
        </div>
        </div>
    )
}

export default Main
