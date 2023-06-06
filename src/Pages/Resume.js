import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h1> Resume </h1>
      <p>
        Here is my current <a href="https://drive.google.com/file/d/1wWtk_5FqAz62Jm9Kc8NRMwvuYXFbyYRQ/view?usp=sharing"> Resume</a>
      </p>
      <h1> Skills </h1>
      <h2> Front-End </h2>
      <div className="list1">
        <ul>
          <li>Bootstrap</li>
          <li>HTML, CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
        </ul>
      </div>
      <h2> Back-End </h2>
      <div className="list2">
        <ul>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MS SQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
