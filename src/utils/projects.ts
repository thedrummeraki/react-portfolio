import { intToRGB, hashCode } from 'utils';

interface ProjectConfig {
  main: ProjectWithVideo[];
  other: BasicProject[];
}

interface ProjectVideo {
  url: string;
  duration: number;
}

type ProjectType = 'showcase' | 'regular' | 'professional' | 'other';
type ProjectNature = 'service' | 'api' | 'web' | 'mobile';

class Technology {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  public color(): string {
    return intToRGB(hashCode(this.title));
  }
}

const buildTechnologies = (...values: string[]) => {
  return values.map(value => new Technology(value));
}

interface BasicProject {
  title: string;
  image: string;
  description: string;
  year: number;
  type: ProjectType;
  nature: ProjectNature;
  technologies?: Technology[];
  closedSource?: boolean;
  hidden?: boolean;
}

export interface RegularProject extends BasicProject {
  video?: ProjectVideo;
}

export interface ProjectWithVideo extends BasicProject {
  video: ProjectVideo;
}

export const mainProjects: ProjectWithVideo[] = [
  {
    title: "Misete.io",
    description: "A space for watching and sharing Nintendo Switch clips.",
    year: 2020,
    type: 'showcase',
    nature: 'web',
    closedSource: false,
    hidden: false,
    image: "https://misete.s3.us-east-2.amazonaws.com/showcase/misete.png",
    video: {url: "https://misete.s3.us-east-2.amazonaws.com/showcase/misete.mov", duration: 161},
    technologies: buildTechnologies('Rails', 'GraphQL', 'Sidekiq', 'OAuth', 'CAS', 'Misete.io')
  },
  {
    title: "YourAnime.moe",
    description: "Your anime. Yours alone.",
    year: 2016,
    type: 'showcase',
    nature: 'web',
    image: '',
    video: {url: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu.mov', duration: 0},
    technologies: []
  },
  {
    title: "Notaki.ca (formerly forevernote.ca)",
    description: "A note-taking app for students.",
    year: 2017,
    type: 'showcase',
    nature: 'web',
    image: '',
    video: {url: '', duration: 0},
    technologies: []
  },
  {
    title: "Notaki.ca (formerly forevernote.ca)",
    description: "A note-taking app for students.",
    year: 2017,
    type: 'showcase',
    nature: 'web',
    image: '',
    video: {url: '', duration: 0},
    technologies: []
  },
  {
    title: "Github Discord Bot",
    description: "A personal Github assistant on Discord.",
    year: 2019,
    type: 'showcase',
    nature: 'web',
    image: '',
    video: {url: '', duration: 0},
    technologies: []
  },
  {
    title: "Rent Management Dashboard (Capstone)",
    description: "Manage your rent payments with this simple yet powerful dashboard.",
    year: 2019,
    type: 'showcase',
    nature: 'web',
    image: '',
    video: {url: '', duration: 0},
    technologies: []
  }
];

export const otherProjects: RegularProject[] = [
]

export const allProjectsList: ProjectConfig = {
  main: mainProjects,
  other: otherProjects,
};
