import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', appLink: '#', repoLink: '#https://github.com/muktadir1090/proj-drinkDB' },
    { title: 'Project 2', appLink: '#', repoLink: '#https://github.com/Flo2009/Power_Bundle' },
    { title: 'Project 3', appLink: '#', repoLink: '# https://github.com/Flo2009/HamFinderLinks to an external site.' },
    { title: 'Project 4', appLink: '#', repoLink: '#https://github.com/muktadir1090/assign21Mern' },
    { title: 'Project 5', appLink: '#', repoLink: '# https://github.com/muktadir1090/assignment13ORMLinks to an external site. ' },
    { title: 'Project 6', appLink: '#', repoLink: '#git hub: https://github.com/muktadir1090/ass11Note' },

    // Add more projects here
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h2>{project.title}</h2>
          <a href={project.appLink} target="_blank" rel="noreferrer">Deployed App</a>
          <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;