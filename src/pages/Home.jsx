import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
  <main>
    <div className="intro">
      <h1>Developer's AI</h1>
      <p>Unlock the power of automation with our platform,<br/>
       where you can obtain SQL queries, AI-generated images, <br/>
       and expertly troubleshoot errors with ease.</p>
       <p><Link className='btn' to="/output">Learn More</Link></p>
    </div>
    <div className="achievements">
      <div className="work">
        <p className="work-heading">AI Images</p>
        <p className="work-text">AI-powered image generation simplifies website development by allowing you to generate custom images based on textual descriptions, eliminating the need to search for specific images online.This allows to have a images according to our imagination without compromising in UI of <br></br>websites.</p>
        <p><Link  className='btn' to="/image">Explore</Link></p>
      </div>

      <div className="work">
        <p className="work-heading">Errors</p>
        <p className="work-text">
        AI-powered error handling simplifies website development by providing intelligent error analysis and resolution based on error descriptions. Instead of struggling to identify and fix errors manually, you can provide error descriptions, and the AI can analyze the problem and suggest solutions, streamlining the debugging process for efficient website development.</p>
        <p><Link  className='btn' to="/error">Explore</Link></p>
      </div>
      <div className="work">
        <p className="work-heading">SQL Queries</p>
        <p className="work-text">Instead of memorizing complex queries, you can simply provide a description in natural language, and our platform will automatically generate the corresponding SQL query for you. This streamlines the development process and eliminates the need for manual query creation, making website development more efficient and accessible for developers.</p>
        <p><Link  className='btn'  to="/sql">Explore</Link></p>
      </div>
    </div>
  </main>
  </div>
    )
}

export default Home;

// Repeat the same pattern for About.js and Contact.js
