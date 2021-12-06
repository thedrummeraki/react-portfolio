import React from "react";
import { Route, Switch } from "react-router-dom";
import { MyProjects, ViewProject, DexifyPrivacyPolicy } from "sections";
import { ProjectLayout } from "./Layout";

export function ProjectRoutes() {
  return (
    <Route exact path={["/projects", "/view", "/dexify/privacy"]}>
      <ProjectLayout title="Akinyele - My projects" activeFor="projects">
        <Switch>
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/view" component={ViewProject} />
          <Route exact path="/dexify/privacy" component={DexifyPrivacyPolicy} />
        </Switch>
      </ProjectLayout>
    </Route>
  );
}
