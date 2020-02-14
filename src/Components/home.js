import React from 'react';
import Picture from "../IMG-20181217-WA0001.jpg"

const Home = () => {
    return (
        <div className = "content">
            <section className = "inside-container intro">
                <h1 id = "intro">Hey, I am Prayag. I am a self taught coder living in Pune, India</h1>
            </section>
            <section className = "outside-container space-down">
                <img className = "picture" src = {Picture} alt = "this is how i look"/>            
            </section>
            <section className = "inside-container about space-down">
                <h3>About me:</h3>
                <span>Hello, Few months back I decided to make a career change from being a management consultant to frontend developer. Since then I have been learning to code mainly using freeCodeCamp. You could have a look at my CV here. Apart from that, I am interested in circular economy, writing and startups.</span>
            </section>
        </div>
    )
}

export default Home