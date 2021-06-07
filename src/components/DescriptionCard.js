import React from 'react'

function DescriptionCard() {
    return (
        <div className="card">
            <img src="/images/1.jpg" alt="course-img" className="medium"/>
            <div className="card-body">
                <div style={{marginLeft : 2+'rem'}}>
                <h2>37</h2>
                <p>Interactive quizzes</p>
                </div>
                <div>
                <h2>265+</h2>
                <p>concepts and exercises</p>
                </div>
            </div>
            <div>
                <button className="course-btn">Start Course</button>
            </div>
        </div>
    )
}

export default DescriptionCard
