import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h1> Resume </h1>
      <p>
        Here is my current <a href="https://drive.google.com/file/d/1wWtk_5FqAz62Jm9Kc8NRMwvuYXFbyYRQ/view?usp=sharing"> Resume</a> in pdf format.
      </p>
      <h1> Skills </h1>
      <h2> Front-End </h2>
      <div className="list1">
        <ul>
          <li className="list-item">Bootstrap</li>
          <li className="list-item">HTML, CSS</li>
          <li className="list-item">JavaScript</li>
          <li className="list-item">ReactJS</li>
        </ul>
      </div>
      <h2> Back-End </h2>
      <div className="list2">
        <ul>
          <li className="list-item">NodeJS</li>
          <li className="list-item">ExpressJS</li>
          <li className="list-item">MS SQL</li>
          <li className="list-item">MySQL</li>
          <li className="list-item">MongoDB</li>
          <li className="list-item">Java</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
