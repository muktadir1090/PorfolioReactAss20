import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project- 1, Drink Database. "Frozen"', appLink: '#', repoLink: '#https://github.com/muktadir1090/proj-drinkDB' },
    { title: 'Project - 2, Online Store, PowerBundle , an online store to buy healthy drinks and snakcs for health concern people', appLink: '#', repoLink: '#https://github.com/Flo2009/Power_Bundle' },
    { title: 'Project - 3, And Online platform for radio listener who is looking for radio staion based on country and language', appLink: '#', repoLink: '# https://github.com/Flo2009/HamFinderLinks to an external site.' },
    { title: 'Project - 4, This is a project using "MERN"', appLink: '#', repoLink: '#https://github.com/muktadir1090/assign21Mern' },
    { title: 'Project - 5 This is a project usinf ORM', appLink: '#', repoLink: '# https://github.com/muktadir1090/assignment13ORMLinks to an external site. ' },
    { title: 'Project - 6 This is note taker application', appLink: '#', repoLink: '#git hub: https://github.com/muktadir1090/ass11Note' },

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