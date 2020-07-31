import { intToRGB, hashCode, toPermalink } from 'utils';

interface ProjectConfig {
  main: BasicProject[];
  other: BasicProject[];
}

interface ProjectVideo {
  url: string;
  duration?: number;
}

type ProjectType = 'showcase' | 'regular' | 'professional' | 'other';
type ProjectNature = 'service' | 'api' | 'web' | 'mobile';

class Technology {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  public color(): string {
    return '#' + intToRGB(hashCode(this.title));
  }
}

const buildTechnologies = (...values: string[]) => {
  return values.map(value => new Technology(value));
}

interface BasicProject {
  title: string;
  image: string;
  description: string;
  text?: string;
  year: number;
  yearPeriod: 'late' | 'early' | 'mid';
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

export const mainProjects: RegularProject[] = [
  {
    title: "YourAnime.moe",
    description: "Your anime. Yours alone.",
    text: `
      This is my first full-fledged website. This was originally designed for anime streaming but I
      then decided not to host anything due to legal reasons. I have developed a separate admin dashboard
      for managing content on the site. My focus was on providing top-notch user experience.
      I also wrote my own HTML5 video player.
    `,
    year: 2016,
    yearPeriod: 'late',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu_en.png',
    video: {url: 'https://youtu.be/BSsPekiET0A'},
    technologies: buildTechnologies('Rails', 'Ruby', 'Python', 'Node.js', 'jQuery')
  },
  {
    title: "Misete.io",
    description: "A space for watching and sharing Nintendo Switch clips.",
    text: `
      This site has several components: the site itself, backed by Sidekiq-operated background jobs,
      a separate authentication system and an internal GraphQL API used for fetching large quantities
      of data.
    `,
    year: 2020,
    yearPeriod: 'early',
    type: 'showcase',
    nature: 'web',
    closedSource: false,
    hidden: false,
    image: "https://misete.s3.us-east-2.amazonaws.com/showcase/misete.png",
    video: {url: "https://youtu.be/oc4UwJunsGs"},
    technologies: buildTechnologies('Rails', 'GraphQL', 'Sidekiq', 'OAuth', 'CAS')
  },
  {
    title: "O SUSUME (Let's watch anime together!)",
    description: "A tool serving as Shopify's internal recommendation anime system.",
    text: `
      This project is part of Shopify hackdays.

      O SUSUME - おすすめ - as the name ("recommended" in English) would suggest - serves as Shopify's 
      internal Anime recommendation platform!
    `,
    year: 2020,
    yearPeriod: 'mid',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/osusume.png',
    technologies: buildTechnologies('Rails', 'Go', 'Python', 'React')
  },
  {
    title: "Github Discord Bot",
    description: "A personal Github assistant on Discord.",
    text: `
      Designed and built to work with a Github organization for managing pull requests directly on
      Discord. I used Github's latest GraphQL API for cleaner management of queries and mutations.
    `,
    year: 2019,
    yearPeriod: 'early',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/discord-bot.png',
    video: {url: 'https://youtu.be/xQeAJQJvhJM'},
    technologies: buildTechnologies('Node.JS', 'Ruby', 'GraphQL', 'Github API', 'Discord API')
  },
  {
    title: "Notaki.ca (formerly forevernote.ca)",
    description: "A note-taking app for students.",
    text: `
      Originally a prototype for a graded academic project. I then completed the application on
      my own. I implemented extra features such as: automatic saving, generating PDFs and theme
      personalization. The next step is to further improve user experience and re-implement the
      front end in React.
    `,
    year: 2017,
    yearPeriod: 'late',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/forevernote.png',
    technologies: buildTechnologies('Rails', 'JavaScript')
  },
  {
    title: "Rent Management Dashboard (Capstone)",
    description: "Manage your rent payments with this simple yet powerful dashboard.",
    text: `
      This is the final academic project for my bachelor's degree of Applied Science in Software
      Engineering. The goal is to allow residents to pay their rent through an online dashboard.
      They will be able to track their payments, get alerts for upcoming payments and see their
      unit/lease information. Property managers are able to manage users and lease information.
    `,
    year: 2019,
    yearPeriod: 'early',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/capstone.png',
    technologies: buildTechnologies('Rails')
  }
];

export function getProjectId(project: BasicProject): string {
  const project_id_parts = toPermalink(project.title).split('-');
  return project_id_parts.slice(0, project_id_parts.length).join('-');
};

export function getProjectById(projectId: string) {
  const projects = getAllProjects();
  for (let i = 0; i < projects.length; i++) {
    const currentProject = projects[i];
    if (getProjectId(currentProject) === projectId) {
      return currentProject;
    }
  }

  return null;
}

export const otherProjects: RegularProject[] = [
]

export const allProjectsList: ProjectConfig = {
  main: mainProjects,
  other: otherProjects,
};

export default function getAllProjects() {
  const allProjects: BasicProject[] = [];

  for (let i = 0; i < mainProjects.length; i++) { allProjects.push(mainProjects[i]); }
  for (let i = 0; i < otherProjects.length; i++) { allProjects.push(otherProjects[i]); }

  return allProjects;
};

export function nextProjectOf(project: BasicProject): BasicProject | null {
  const projects = getAllProjects();
  return projects[projects.indexOf(project) + 1];
};

export function previousProjectOf(project: BasicProject): BasicProject | null {
  const projects = getAllProjects();
  return projects[projects.indexOf(project) - 1];
};
