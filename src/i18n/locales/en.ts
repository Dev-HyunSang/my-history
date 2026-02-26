export default {
  profile: {
    name: 'HyunSang Park',
    title: 'Software Engineer',
    blog: 'Blog',
    github: 'GitHub',
    email: 'Email',
    linkedin: 'LinkedIn',
    resume: 'Resume',
  },
  education: {
    title: 'Education',
    school1: {
      name: 'Soonchunhyang University',
      major: 'Information Security, Bachelor of Engineering - BE',
      period: '2023.2 - 2029.2',
    },
    school2: {
      name: 'Soonchunhyang University',
      major: 'Minor in Law',
      period: '2026.2 - 2029.2',
    },
  },
  work: {
    title: 'Work Experience',
    army: {
      name: 'ROK Army Cyber Operations Center',
      position: 'Information Security (Cyber Monitoring) MOS / CERT / Information Security 24-1st',
      period: '2024.3 - 2025.9 / Center Duty: 2024.5 ~ 2025.9',
      task1:
        '[1] Managed cyber operation situations and performed initial incident response for '
        + 'internal and external cyber threats in Army operational control units',
      task2:
        '[2] Blocked access to compromise indicators through security equipment based on '
        + 'threat intelligence from related agencies',
    },
    teamgrit: {
      name: 'TeamGRIT, Inc.',
      position: 'Software Engineer',
      period: '2021.8 - 2023.8',
      task1: '[1] Developed media processing system using Go language',
      task2:
        '[2] Created internal development documentation guidelines and devised '
        + 'document management strategies',
    },
  },
  experience: {
    title: 'Experience',
    ccdc: {
      name: '2025 Cyber Attack Defense Competition (Public Sector)',
      host:
        'Hosted by National Intelligence Service / '
        + 'Organized by National Security Research Institute',
      result: '[1] Public Sector: 20th in Preliminaries / 15th in Finals',
    },
    gdg: {
      name: 'GDG Golang Korea',
      period: '2023.01 ~ 2024.03 / Organizer',
      task1: '[1] Planned and conducted events to activate the Go language community',
      task2:
        '[2] Overall event planning for GopherCon Korea 2023 '
        + '(Organizing committee establishment / Media team lead / CoC team)',
    },
  },
  projects: {
    title: 'Projects',
    project1: {
      name: "VMS(Video Management System) at {'@'}TeamGRIT, Inc.",
      description: 'Developed a video management system that stores videos from TeamGRIT and allows them to be viewed using the HLS protocol.',
      period: '2022.08 ~ 2023.06',
      stack: 'Golang, FFmpeg(HLS), SQLite, MySQL, AWS(EC2 · S3 · CloudFront), NCP(VM · Object Storage), Docker, GitHub Actions',
      github: null,
      blog: null,
    },
    project2: {
      name: 'My Own Library',
      description: 'This service enables users to register and manage their personal book collections using ISBN barcodes and other identifiers, while also allowing them to post book reviews and share them with other users.',
      period: '2026.01 ~ 2026.02',
      stack: 'Golang, Flutter, Azure(VM · DataBase for MySQL, Cache for Redis), Docker, GitHub Actions',
      github: 'https://github.com/dev-hyunsang/my-own-library-backend',
      blog: 'https://blog.hyunsang.dev/posts/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%84%9C%EC%9E%AC/',
    },
  },
  skills: {
    title: 'Skills',
    programming: 'Programming Languages',
    frameworks: 'Frameworks',
    database: 'DataBase',
    infrastructure: 'Infrastructure',
    security: 'Cyber Security Equipment',
  },
  footer: {
    title: 'Email Collection Prohibition',
    content:
      'We prohibit the unauthorized collection of email addresses posted on this site using '
      + 'email harvesting programs or other technical devices. Please note that unauthorized '
      + 'collection and use despite this notice may result in criminal prosecution under the '
      + 'Information and Communications Network Act.',
  },
  language: {
    korean: '한국어',
    english: 'English',
  },
};
