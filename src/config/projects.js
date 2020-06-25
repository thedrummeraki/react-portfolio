import {
  defaultTanoshimu,
  notaki,
  crystal_clear,
  capstone,
  misete,
  discord_bot
} from '../backgrounds';

const projects = {
  main: [
    {
      isClosedSource: true,
      title: 'projects.main.personal.bot.title',
      description: 'projects.main.personal.bot.description',
      image: discord_bot,
      video: 'https://misete.s3.us-east-2.amazonaws.com/showcase/discord-bot.mov',
      text: 'projects.main.personal.bot.text',
      technologies: ['Node.JS', 'Ruby', 'GraphQL', 'Github API', 'Discord API']
    },
    {
      isClosedSource: false,
      title: 'projects.main.misete.title',
      src: 'https://misete.myshopify.io', //'https://misete-stg.herokuapp.com',
      image: misete,
      video: 'https://misete.s3.us-east-2.amazonaws.com/showcase/misete.mov',
      description: 'projects.main.misete.description',
      text: 'projects.main.misete.text',
      technologies: ['Rails', 'GraphQL', 'Sidekiq', 'OAuth', 'CAS', 'Misete.io'],
      preview: 'misete'
    },
    {
      isClosedSource: false,
      title: 'projects.main.tanoshimu.title',
      githubPath: 'thedrummeraki/tanoshimu',
      src: 'http://demo.youranime.moe',
      image: defaultTanoshimu,
      video: 'https://misete.s3.us-east-2.amazonaws.com/showcase/tanoshimu.mov',
      description: 'projects.main.tanoshimu.description',
      text: 'projects.main.tanoshimu.text',
      technologies: ['Rails', 'Ruby', 'Python', 'jQuery'],
      preview: 'tanoshimu'
    },
    {
      isClosedSource: false,
      title: 'projects.main.notaki.title',
      githubPath: 'thedrummeraki/notaki.ca',
      src: 'http://www.forevernote.ca',
      image: notaki,
      description: 'projects.main.notaki.description',
      text: 'projects.main.notaki.text',
      technologies: ['Rails', 'JavaScript'],
      preview: 'notaki'
    },
    {
      isClosedSource: true,
      hidden: true,
      title: 'projects.main.crystal_clear.title',
      description: 'projects.main.crystal_clear.description',
      image: crystal_clear,
      text: 'projects.main.crystal_clear.text',
      technologies: ['Rails', 'Websockets (ActionCable)'],
      preview: 'crystal_clear'
    },
    {
      isClosedSource: true,
      title: 'projects.school.capstone.title',
      src: 'https://capstone-shamn.herokuapp.com/',
      image: capstone,
      description: 'projects.school.capstone.description',
      text: 'projects.school.capstone.text',
      technologies: ['Rails']
    },
  ],
  other: [
    {
      isClosedSource: false,
      title: 'projects.other.hon_site.title',
      githubPath: 'thedrummeraki/react-portfolio',
      description: 'projects.other.hon_site.description',
      text: 'projects.other.hon_site.text',
      technologies: ['React']
    },
    {
      isClosedSource: true,
      src: 'https://lrt-up.herokuapp.com',
      title: 'LRTup',
      description: 'projects.other.lrtup.description',
      text: 'projects.other.lrtup.text',
      technologies: ['Node.js', 'React'],
      preview: 'lrtup'
    },
    {
      isClosedSource: false,
      title: 'projects.other.tanoshimu.title',
      githubPath: 'thedrummeraki/nTanoshimu',
      description: 'projects.other.tanoshimu.description',
      text: 'projects.other.tanoshimu.text',
      technologies: ['Android']
    },
    {
      isClosedSource: true,
      title: 'projects.other.spectrum.title',
      description: 'projects.other.spectrum.description',
      text: 'projects.other.spectrum.text',
      technologies: ['C#', 'Unity', 'Python']
    },
    {
      isClosedSource: false,
      title: 'projects.other.decode.title',
      githubPath: 'jaydenwindle/decode2017',
      description: 'projects.other.decode.description',
      text: 'projects.other.decode.text',
      technologies: ['Rails']
    },
    {
      isCosedSource: true,
      title: 'projects.other.tanoshimu_admin.title',
      description: 'projects.other.tanoshimu_admin.description',
      text: 'projects.other.tanoshimu_admin.text',
      technologies: ['Rails']
    },
    {
      isClosedSource: false,
      title: 'projects.other.french.title',
      src: 'https://french-akinyele.herokuapp.com',
      description: 'projects.other.french.description',
      text: 'projects.other.french.text',
      technologies: ['Rails']
    },
    {
      isClosedSource: false,
      title: 'projects.other.ctgs.title',
      githubPath: 'projects.other.ctgs.githubPath',
      src: 'https://seg3502-uottawa.herokuapp.com',
      description: 'projects.other.ctgs.description',
      text: 'projects.other.ctgs.text',
      technologies: ['Rails']
    },
    {
      isClosedSource: false,
      title: 'projects.other.reviews.title',
      src: 'https://reviews-akinyele.herokuapp.com',
      description: 'projects.other.reviews.description',
      text: 'projects.other.reviews.text',
      technologies: ['Rails'],
      preview: 'reviews-aki'
    },
    {
      isClosedSource: false,
      title: 'projects.other.bra.title',
      githubPath: 'projects.other.bra.githubPath',
      src: 'https://bra-akinyele.herokuapp.com',
      googlePlaySrc: 'https://play.google.com/store/apps/details?id=com.akinyele.bra.brav20',
      description: 'projects.other.bra.description',
      text: 'projects.other.bra.text',
      technologies: ['Android', 'Rails'],
      preview: 'bra'
    }
  ]
}

function findProjectFrom(src, key) {
  let projectsList = null;
  if (src === 'main') {
    projectsList = projects.main;
  } else if (src === 'other') {
    projectsList = projects.other;
  } else {
    return null;
  }

  let project = null;

  projectsList.forEach(mainProject => {
    if (mainProject.preview === key) {
      project = mainProject;
      return;
    }
  });

  return project;
}

export const projectFor = (key) => {
  return findProjectFrom('main', key) || findProjectFrom('other', key);
}

export default projects;
