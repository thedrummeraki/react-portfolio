import {
  defaultTanoshimu,
  notaki,
  crystal_clear
} from '../backgrounds';

const projects = {
  main: [
    {
      isClosedSource: true,
      title: 'projects.main.tanoshimu.title',
      /* src: 'https://demo.youranime.moe', */
      image: defaultTanoshimu,
      description: 'projects.main.tanoshimu.description',
      text: 'projects.main.tanoshimu.text',
      technologies: ['Rails', 'Ruby', 'Python', 'jQuery']
    },
    {
      isClosedSource: false,
      title: 'projects.main.notaki.title',
      githubPath: 'thedrummeraki/notaki.ca',
      src: 'http://www.forevernote.ca',
      image: notaki,
      description: 'projects.main.notaki.description',
      text: 'projects.main.notaki.text',
      technologies: ['Rails', 'JavaScript']
    },
    {
      isClosedSource: true,
      title: 'projects.main.crystal_clear.title',
      description: 'projects.main.crystal_clear.description',
      image: crystal_clear,
      text: 'projects.main.crystal_clear.text',
      technologies: ['Rails', 'Websockets (ActionCable)']
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
      technologies: ['Rails']
    },
    {
      isClosedSource: false,
      title: 'projects.other.bra.title',
      githubPath: 'projects.other.bra.githubPath',
      src: 'https://bra-akinyele.herokuapp.com',
      googlePlaySrc: 'https://play.google.com/store/apps/details?id=com.akinyele.bra.brav20',
      description: 'projects.other.bra.description',
      text: 'projects.other.bra.text',
      technologies: ['Android', 'Rails']
    }
  ]
}

export default projects;
