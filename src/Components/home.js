import React from 'react';
import Picture from "../IMG-20181217-WA0001.jpg"



const Home = () => {
    return (
        <div className = "content">
            <section>
                <h1>Hello, I am Prayag. I am self taught coder living in Pune, India</h1>
            </section>
            <section>
                <img src = {Picture} alt = "this is how i look"/>            
            </section>
            <section>
                <h3>About me</h3>
                <span>Hello Hello you could download my Resume here.</span>
            </section>
        </div>
    )
}

export default Home