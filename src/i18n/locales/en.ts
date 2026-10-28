export default {
  profile: {
    name: 'Hyunsang Park',
    title: 'Software Engineer',
    blog: 'Blog',
    github: 'GitHub',
    email: 'Email',
    linkedin: 'LinkedIn',
  },
  summary: {
    title: 'Summary',
    content:
      'Software Engineer with 3+ years of experience in backend development and security infrastructure operations.\n'
      + 'Experienced in building media processing servers in Go, cloud infrastructure, and security monitoring.\n'
      + 'Currently working on Physical Computing as a Software Engineer at Alan Inc.\n',
  },
  education: {
    title: 'Education',
    school1: {
      name: 'Soonchunhyang University',
      url: 'https://sch.ac.kr',
      major: 'Information Security (B.E.)',
      position: 'Undergraduate Student',
      period: '2023.2 - 2029.2',
    },
    school2: {
      name: 'Soonchunhyang University',
      url: 'https://sch.ac.kr',
      major: 'Law (Minor)',
      position: 'Undergraduate Student',
      period: '2026.2 - 2029.2',
    },
  },
  work: {
    title: 'Work Experience',
    viewDetails: 'View details →',
    back: '← Back',
    alan: {
      name: 'Alan Inc.',
      url: 'https://alango.xyz/',
      position: 'Software Engineer',
      period: '2026.09 ~ Present',
    },
    army: {
      name: 'ROK Army Cyber Operations Center, O Operations Group',
      url: 'https://www.army.mil.kr/',
      position: 'Information Security Specialist',
      period: '2024.3 - 2025.9 / Monitoring Duty: 2024.5 ~ 2025.9',
      location: 'Gyeryong, Republic of Korea',
      tasks: [
        '[1] Managed internal/external cyber operation situations and performed initial incident response '
        + 'for Army operational control units (Army HQ, Operations Command, Corps/Divisions)',
        '[2] Operated security solutions and equipment including Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · WAF, '
        + 'and Genians NAC to identify and block cyber intrusions on internal/external networks',
      ],
      details: [
        'Managed internal/external cyber operation situations and performed initial incident response '
        + 'for Army operational control units (Army HQ, Operations Command, Corps/Divisions)',
        'Operated security solutions and equipment including Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · WAF, '
        + 'and Genians NAC to identify and block cyber intrusions on internal/external networks',
        'Competed in the Public Sector finals of the 2025 Cyber Conflict Exercise (CCE), '
        + 'hosted by the National Intelligence Service and organized by the National Security Research Institute',
      ],
    },
    teamgrit: {
      name: 'TeamGRIT, Inc.',
      url: 'https://teamgrit.kr',
      position: 'Software Engineer',
      period: '2021.8 - 2023.8',
      tasks: [
        '[1] Developed a media processing system in Go',
        '[2] Wrote internal development documentation guidelines and devised a documentation management process',
      ],
      details: [
        'Developed a media processing system in Go',
        'Wrote internal development documentation guidelines and devised a documentation management process',
      ],
    },
  },
  experience: {
    title: 'Experience',
    ccdc: {
      name: '2025 Cyber Conflict Exercise (CCE)',
      url: 'https://cce.cstec.kr/',
      position: 'Public Sector Participant',
      tasks: [
        '[1] Hosted by the National Intelligence Service · Organized by the National Security Research Institute',
        '[2] Public Sector: 20th in Preliminaries / 15th in Finals',
      ],
      details: [
        'Public Sector: 20th in Preliminaries / 15th in Finals',
      ],
    },
    gdg: {
      name: 'GDG Golang Korea',
      url: 'https://gdg.community.dev/gdg-golang-korea/',
      position: 'Organizer',
      period: '2023.01 ~ 2024.03',
      tasks: [
        '[1] Planned and ran events to grow the Go community',
        '[2] Overall event planning for GopherCon Korea 2023 (Organizing committee / Media team lead / CoC team)',
      ],
      details: [
        'Planned and ran events to grow the Go community',
        'Overall event planning for GopherCon Korea 2023 (Organizing committee / Media team lead / CoC team)',
      ],
    },
    pycon_korea: {
      name: 'PyCon Korea',
      url: 'https://www.python.or.kr/',
      position: 'Organizer',
      period: '2026.02 ~ Present',
      tasks: [
        '[1] PyCon Korea 2026 Media Team',
        "Email -  park.hyunsang{'@'}python.or.kr",
      ],
      details: [
        'PyCon Korea 2026 Media Team',
      ],
    },
  },
  projects: {
    title: 'Projects',
    project1: {
      name: 'VMS(Video Management System) at TeamGRIT, Inc.',
      description: 'Developed a video management system that stores videos streamed by TeamGRIT and serves them over the HLS protocol.',
      period: '2022.08 ~ 2023.06',
      stack: 'Golang, FFmpeg(HLS), AWS(S3, CloudFront), GitHub Actions, Docker',
      github: null,
      blog: null,
    },
    project2: {
      name: 'My Own Library',
      description: 'A service for registering and managing the books you own via ISBN barcodes, writing book reviews, and sharing them with other users.',
      period: '2026.01 ~ 2026.02',
      stack: 'Golang, Flutter, Docker, Azure(VM · DataBase for MySQL, Cache for Redis), GitHub Actions',
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
    security: 'Cyber Security Solution',
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
