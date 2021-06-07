import React, { useState } from 'react';
import data from "../data";


function Description() {
    const { description,TopicsCovered } = data;
    const [readMore, setreadMore]= useState(false);
    return (
        <div className="description-text">
            <h1 style={{fontSize: 3 + 'rem'}}>Logic</h1>
            <h3 style={{marginTop: 1 + 'rem',marginBottom : 1+'rem'}}>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h3>
            {!readMore 
            ? 
            <p style={{marginTop: 1 + 'rem',marginBottom : 1+'rem'}}>{description.substring(0,150)}...<button type="button" className="readmore-btn" onClick={e => setreadMore(true)}>Read more</button></p> 
            :
            <div>
                <p style={{marginTop: 1 + 'rem',marginBottom : 1+'rem'}}>{description}</p>
                <h3 style={{marginTop: 1 + 'rem',marginBottom : 1+'rem'}}>Topics Covered</h3>
                <div>
                    {
                        TopicsCovered.map(topic => {
                            return (<p>{topic}</p>)
                        })
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Description
