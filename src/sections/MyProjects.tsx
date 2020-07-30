import React from 'react';
import { z, allProjectsList, nextProjectOf } from 'utils';
import allProjects, { previousProjectOf } from 'utils/projects';
import { Project, SectionContainer } from 'components';

export function MyProjects() {
  return (
    <SectionContainer title='My work'>
      <Projects />
    </SectionContainer>
  )
}

function Projects() {
  return (
    <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
      {allProjectsList.main.map(project => <Project key={project.title} project={project} />)}
    </div>
  )
}
