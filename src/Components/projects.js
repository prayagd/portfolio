import React from 'react';

const Projects = () => {
    return(
        <div className = "content">
            <section>
                <div className = "inside-container intro">
                    <h1 id = "intro">Projects: Sample of my work</h1>
                </div>
            </section>
            <section className = "border projects">
                <div className = "inside-container intro">
                    <ul>
                        <li className = "bottom-border">
                            <a href = "https://codepen.io/pd07/full/XWJvBwb" alt = "Javascript Calculator" target = "_blank" rel="noopener noreferrer">
                                <div className = "project-card">
                                    <a  href = "https://codepen.io/pd07/full/XWJvBwb" alt = "Javascript Calculator" target = "_blank" rel="noopener noreferrer"><i class="fas fa-calculator"></i></a>
                                </div>
                            </a>
                            <a href = "https://codepen.io/pd07/full/XWJvBwb" alt = "Javascript Calculator" target = "_blank" rel="noopener noreferrer">
                                <h4>Javascript Calculator</h4>
                            </a>
                        </li>
                        <li className = "bottom-border">
                            <a href = "https://codepen.io/pd07/full/YzPgYwm" alt = "Markdown Previewer" target = "_blank" rel="noopener noreferrer">
                                <div className = "project-card">
                                    <a href = "https://codepen.io/pd07/full/YzPgYwm" alt = "Markdown Previewer" target = "_blank" rel="noopener noreferrer"><i class="fas fa-edit"></i></a>
                                </div>
                            </a>
                            <a href = "https://codepen.io/pd07/full/YzPgYwm" alt = "Markdown Previewer" target = "_blank" rel="noopener noreferrer">
                                <h4>Markdown Previewer</h4>
                            </a>
                        </li>
                        <li className = "bottom-border">
                            <a href = "https://codepen.io/pd07/full/yLywvPd" alt = "Drumkit" target = "_blank" rel="noopener noreferrer">
                                <div className = "project-card">
                                    <a href = "https://codepen.io/pd07/full/yLywvPd" alt = "Drumkit" target = "_blank" rel="noopener noreferrer"><i class="fas fa-drum"></i></a>
                                </div>
                            </a>

                            <a href = "https://codepen.io/pd07/full/yLywvPd" alt = "Drumkit" target = "_blank" rel="noopener noreferrer">
                                <h4>Drumkit</h4>
                            </a>
                        </li>
                        <li>
                            <a href = "https://codepen.io/pd07/full/mdyQWmq" alt = "Random Quote Generator" target = "_blank" rel="noopener noreferrer">
                                <div className = "project-card">
                                    <a href = "https://codepen.io/pd07/full/mdyQWmq" alt = "Random Quote Generator" target = "_blank" rel="noopener noreferrer"><i class="fas fa-quote-left"></i></a>
                                </div>
                            </a>
                            <a href = "https://codepen.io/pd07/full/mdyQWmq" alt = "Random Quote Generator" target = "_blank" rel="noopener noreferrer">
                                <h4>Random Quote Generator</h4>
                            </a>
                        </li>
                    </ul>
                </div>     
            </section>
        </div>
    )
}

export default Projects