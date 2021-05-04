import React from "react";
import { MainRoutes, ProjectRoutes, MusicRoutes } from "foundation";
import { BrowserRouter } from "react-router-dom";

export const ShowCurrentTrackContext = React.createContext(false);

export function EntryPoint() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <ShowCurrentTrackContext.Provider value={true}>
        <MusicRoutes />
      </ShowCurrentTrackContext.Provider>
      <ProjectRoutes />
    </BrowserRouter>
  );
}
