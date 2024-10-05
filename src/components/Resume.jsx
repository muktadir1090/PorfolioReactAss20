import React from 'react';
import resume from '../assets/resume.pdf'

function Resume() {
  return (
    <section id="resume">
      <a href={resume} download>Download Resume</a>
      <ul>
        <li>Web <Development></Development></li>
        <li>Software Development </li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;