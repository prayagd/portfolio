import React from 'react';

const Contact = () => {
    return (
        <div>
            <section>
                <div className = "contact-container">
                    <h1>You could find me here</h1>
                </div>
            </section>
            <section className = "inside-container intro">
                <ul className = "contact-tag">
                    <li><a href = "https://twitter.com/meprayag" target = "_blank" rel="noopener noreferrer"><i class = "fab fa-twitter"></i> Twitter</a></li>
                    <li><a href = "https://github.com/prayagd" target = "_blank" rel="noopener noreferrer"><i class = "fab fa-github"></i> GitHub</a></li>
                </ul>
            </section>
            <section className = "contact-container space-down">
                <a href = "mailto:prayagd21@gmail.com" className = "email">Email Me</a>
            </section>
        </div>
    )
}

export default Contact