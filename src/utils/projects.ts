import { intToRGB, hashCode, toPermalink } from 'utils';
import { github, view } from 'icons';

interface ProjectConfig {
  main: BasicProject[];
  other: BasicProject[];
}

interface ProjectVideo {
  url: string;
  duration?: number;
}

export interface ProjectUrl {
  icon: string;
  url: string;
  alt: string;
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
  pre?: string;
  text?: string;
  year: number;
  yearPeriod: 'late' | 'early' | 'mid';
  type: ProjectType;
  nature: ProjectNature;
  technologies?: Technology[];
  closedSource?: boolean;
  hidden?: boolean;
  urls?: ProjectUrl[];
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
    description: "Your anime, your games. Yours alone.",
    pre: `
      This is a place where you can get the latest info about anime and games!
      Support the anime and game industries, comment and share your thoughts on the latest shows and games.
    `,
    text: `
      Formerly named "Tanoshimu". This is my first full-fledged website. This was originally designed for anime streaming but I
      then decided not to host anything due to legal reasons. I have developed a separate admin dashboard
      for managing content on the site. My focus was on providing top-notch user experience.
      I also wrote my own HTML5 video player.
    `,
    year: 2016,
    yearPeriod: 'late',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu_en.png',
    video: { url: 'https://youtu.be/k2ZRwajkxFI' },
    technologies: buildTechnologies('Rails', 'OAuth', 'Sidekiq', 'Ruby', 'Python', 'Node.js', 'jQuery'),
    urls: [
      { url: 'https://www.youranime.moe', alt: 'Main link', icon: view },
    ]
  },
  {
    title: "YourAnime.moe Admin panel",
    description: "YourAnime.moe: supercharged.",
    text: `
      The admin for my favourite project, YourAnime.moe. Logging as an admin user allows one to navigate the
      site in the same way as a regular user. Admin users are however not allowed to perform any actions on
      the site (ie: like, comment, etc.). The admin panel allows a user to manage existing users, shows, games,
      and events.
    `,
    year: 2020,
    yearPeriod: 'late',
    type: 'showcase',
    nature: 'web',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu-admin.png',
    video: { url: 'https://youtu.be/rTm8zPP59XU' },
    technologies: buildTechnologies('Rails', 'OAuth', 'Sidekiq', 'Ruby', 'Python', 'Node.js', 'jQuery')
  },
  {
    title: "Misete Accounts",
    description: 'My solution to authentication. "Show me" everything I need to know!',
    pre: `
      「見せて」("misete") stands for "show me" in Japanese. It's important for me that users have complete control
      over their personal information, whether it be name, username or password.
    `,
    text: `
      Originally part of Misete.io. This is currently used in YourAnime.moe (and is the only to create
      an account). This is a closed-source self-contained authentication system where your account information
      is safely stored. No critical information is currently stored on the server.
    `,
    year: 2020,
    yearPeriod: 'mid',
    type: 'showcase',
    nature: 'web',
    closedSource: true,
    hidden: false,
    image: "https://misete.s3.us-east-2.amazonaws.com/showcase/misete-accounts.png",
    video: { url: 'https://youtu.be/5mvfGUjjYUE' },
    technologies: buildTechnologies('Rails', 'OAuth'),
    urls: [
      { url: 'https://accounts-misete-stg.herokuapp.com', alt: 'Main link', icon: view },
    ]
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
    closedSource: true,
    hidden: false,
    image: "https://misete.s3.us-east-2.amazonaws.com/showcase/misete.png",
    video: {url: "https://youtu.be/oc4UwJunsGs"},
    technologies: buildTechnologies('Rails', 'GraphQL', 'Sidekiq', 'OAuth', 'CAS'),
    urls: [
      { url: 'https://misete-stg.herokuapp.com', alt: 'Main link', icon: view },
    ]
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
    video: { url: 'https://youtu.be/5JVJGMZssmw' },
    technologies: buildTechnologies('Rails', 'JavaScript'),
    urls: [
      { url: 'http://www.forevernote.ca', icon: view, alt: 'main' },
      { url: 'https://github.com/thedrummeraki/notaki.ca', icon: github, alt: 'github' }
    ]
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
  },
  {
    title: 'gem tanoshimu_utils',
    description: "A couple of Rails utilities to make my life simpler.",
    text: `
      Just a couple of utilities shared accross the apps to make development much easier. 
    `,
    year: 2020,
    yearPeriod: 'early',
    type: 'other',
    nature: 'api',
    image: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu_utils_gem.png',
    technologies: buildTechnologies('Ruby'),
    urls: [
      { url: 'https://github.com/thedrummeraki/tanoshimu_utils', icon: github, alt: 'github' },
      { url: 'https://rubygems.org/gems/tanoshimu_utils', icon: view, alt: 'rubygems' },
    ]
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
