import React from 'react';
import { z, allProjectsList } from 'utils';
import { Project } from 'components';

export function MyProjects() {
  return (
    <section className={z`padding 170 0; color #fff`}>
      <div className={z`text-align center`}>
        <h1 className={z`user-select none`}>My work</h1>
        <article className={z`max-width 90%; margin 0 auto`}>
          <Projects />
        </article>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
      {allProjectsList.main.map(project => <Project project={project} />)}
    </div>
  )
}
