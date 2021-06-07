import React, { useState } from 'react'
import Header from './Header'


function WarmuPuzzles() {
    const [slide1,setSlide1] = useState(true);
    const [slide2 , setSlide2] = useState(false);
    const [slide3 , setSlide3] = useState(false);
    const [slide4 , setSlide4] = useState(false);
    const [slide5 , setSlide5] = useState(false);
    const [slide6 , setSlide6] = useState(false);

    const slide1Handler = (e) =>{
        e.preventDefault();
        setSlide1(true);
        setSlide2(false)
        setSlide3(false)
        setSlide4(false)
        setSlide5(false)
        setSlide6(false)
    }
    const slide2Handler = (e) =>{
        e.preventDefault();
        setSlide1(false);
        setSlide2(true)
        setSlide3(false)
        setSlide4(false)
        setSlide5(false)
        setSlide6(false)
    }
    const slide3Handler = (e) =>{
        e.preventDefault();
        setSlide1(false);
        setSlide2(false)
        setSlide3(true)
        setSlide4(false)
        setSlide5(false)
        setSlide6(false)
    }
    const slide4Handler = (e) =>{
        e.preventDefault();
        setSlide1(false);
        setSlide2(false)
        setSlide3(false)
        setSlide4(true)
        setSlide5(false)
        setSlide6(false)
    }
    const slide5Handler = (e) =>{
        e.preventDefault();
        setSlide1(false);
        setSlide2(false)
        setSlide3(false)
        setSlide4(false)
        setSlide5(true)
        setSlide6(false)
    }
    const slide6Handler = (e) =>{
        e.preventDefault();
        setSlide1(false);
        setSlide2(false)
        setSlide3(false)
        setSlide4(false)
        setSlide5(false)
        setSlide6(true)
    }

    return (
        <>
        <Header/>
        <div className="puzzle-container">
           <div className="col-1">
                <h1>Logic</h1>
           </div>
           <div className="col-2">
                {
                    slide1 ? (<div className="slide">
                        <h3>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:
                            <br/><br/>
                            Joseph is not the youngest<br/>
                            Kevin is the oldest<br/>
                            Nicholas is not the oldest<br/></h3>
                    </div>) 
                    : 
                    ( slide2 ? 
                        (<div className="slide">
                        <h3>One of the women above is named Kaylee and the other is named Inara. They each make a statement about who they are as shown.<br/><br/>
                        We know that at least one of them is lying. What color is Inara's dress?</h3>
                    </div>) : (
                        slide3 ? (
                            <div className="slide"><h3>The next three problems gradually increase in difficulty, and all of them are more challenging than the warm-ups you just solved.<br/><br/>
                                    It's worth the effort. The most effective learning experiences are often those times when you get a problem wrong, and then challenge yourself to read, understand, and learn from the solution.</h3></div>
                        ) : (
                            slide4 ? (
                                <div className="slide"><h3>Arrange the cards to make the following true:<br/><br/>

                                    The king is in one of the two middle spaces.<br/>
                                    The queen is left of the jack and right of the ace.<br/>
                                    The ace is directly next to the queen.<br/>
                                    (Note: Left and right are from the player's perspective).<br/>

                                    Drag the characters into the dotted boxes.</h3></div>
                            ) : (
                                slide5 ? (
                                    <div className="slide"><h3>Five friends competed in a race.<br/><br/>

                                        Pyrrha finished faster than Blake.<br/>
                                        The smallest difference in finishing times was between Pyrrha and Ruby.<br/>
                                        The largest difference in finishing times was between Ruby and Weiss.<br/>
                                        Yang finished either 1st or 3rd.<br/><br/>
                                        Drag the characters into the dotted boxes.</h3></div>
                                ) : (slide6 ? <div className="slide"><h3>1. There is exactly 11 false statement in this list.<br/>
                                            2. There are exactly 22 false statements in this list.<br/>
                                            3. There are exactly 33 false statements in this list.<br/><br/>
                                            How many false statements are there in the list above?<br/></h3></div> : <div><h3>Puzzle1</h3></div>)
                            ) 
                        )
                    )
                    )
                }
           </div>
           <div className="col-3">
                <div className="col-3-container">
                    <p>Lesson 1</p>
                    <p>WARMUP PUZZLES</p>
                    <div className="button-group">
                        <button onClick={slide1Handler} className={slide1 ? "btn-1" : null}></button>
                        <button onClick={slide2Handler} className={slide2 ? "btn-2" : null}></button>
                        <button onClick={slide3Handler} className={slide3 ? "btn-3" : null}></button>
                        <button onClick={slide4Handler} className={slide4 ? "btn-4" : null}></button>
                        <button onClick={slide5Handler} className={slide5 ? "btn-5" : null}></button>
                        <button onClick={slide6Handler} className={slide6 ? "btn-6" : null}></button>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}

export default WarmuPuzzles
