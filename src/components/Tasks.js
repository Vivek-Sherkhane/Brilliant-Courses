import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

function Tasks() {
    return (
            <>
                <div className="tasks-container">
                <h3 style={{fontSize: 2 + 'rem'}}>Introduction</h3>
                <p>Put your logic to the test with these warmups!</p>
                <div className="card-container">
                    <Link to="/warmup-puzzles" className="tasks-card-link"><Card title={"warmup Puzzles"} description={"Get started with some logic problems"}/></Link>
                    <Card title={"Truth Seeking"} description={"Who or what is telling the truth"}/>
                    <Card title={"Strategic Deductions"} description={"Stretch the information you're given as far as it can go!"}/>
                </div>
                </div>
                <div className="tasks-container">
                <h3 style={{fontSize: 2 + 'rem'}}>The Rational Detective</h3>
                <p>Eliminate the impossible and uncover the truth! Collapse</p>
                <div className="card-container">
                    <Card title={"Riddles of Order"} description={"What order do these racers finish in?"}/>
                    <Card title={"Crafty Counting"} description={"Learn strategies for counting that go far beyond just counting."}/>
                    <Card title={"Mystery Containers"} description={"What's in each of these mystery boxes?"}/>
                    <Card title={"Futoshiki"} description={"Arrange the numbers to match the inequalities."}/>
                    <Card title={"Shuffles"} description={"Where did everything get shuffled to?"}/>
                    <Card title={"False Information"} description={"Solve problems where the people giving you hints might be lying."}/>
                </div>
                </div>
                <div className="tasks-container">
                <h3 style={{fontSize: 2 + 'rem'}}>Puzzles and Riddles</h3>
                <p>Even trickier puzzles and the tools you need to solve them.</p>
                <div className="card-container">
                    <Card title={"Werewolves"} description={"Who's a werewolf?"}/>
                    <Card title={"Logical Language"} description={'Explore the logical use of the words "and", "or", and "not".'}/>
                    <Card title={"If A, then B."} description={"If you do this quiz, you will learn about sentences like this one."}/>
                    <Card title={"Elimination Grids"} description={"Solve classic logic elimination puzzles."}/>
                </div>
                </div>
            </>
    )
}

export default Tasks
