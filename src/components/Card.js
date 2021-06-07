import React from 'react'

function Card({title,description}) {
    return (
        <div className="tasks-card">
            <div className="tasks-image"><img src="/images/pic1.jpg" className="small"></img></div>
            <div className="tasks-card-text">
                <h4 >{title}</h4>
                <p style={{color: "#909090"}}>{description}</p>
            </div>
        </div>
    )
}

export default Card
