import { SectionContainer } from "components";
import React from "react";
import { ProjectGallery, RegularProject, z } from "utils";

interface Props {
  project: RegularProject;
}

export function ViewProjectGallery({ project: { galleries } }: Props) {
  if (!galleries) {
    return null;
  }

  return <>{galleries.map((gallery) => renderGallery(gallery))}</>;
}

function renderGallery(gallery: ProjectGallery) {
  const { title, images } = gallery;

  return (
    <SectionContainer internal title={title}>
      <div className={z`d flex; flex-wrap wrap; justify-content space-around`}>
        {images.map((image) => (
          <div
            className={z`flex 1 0 45%; height 400; width 500; margin 3.5rem 5; user-select none;`}
          >
            <div className={z`width 100%; height 400`}>
              <img
                className={z`height 100%; width 100%; object-fit cover`}
                src={image.src}
                alt={title}
              />
              <p className={z`display grid; font-weight bold; padding 0 1rem`}>
                <span className={z`color white`}>{image.title}</span>
                {image.description && (
                  <small className={z`color #aaa`}>{image.description}</small>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
