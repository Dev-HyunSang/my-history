export default {
  profile: {
    name: '박현상',
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
      name: '순천향대학교',
      major: '정보보호학, 공학사',
      period: '2023.2 - 2029.2',
    },
    school2: {
      name: '순천향대학교',
      major: '법학, 부전공',
      period: '2026.2 - 2029.2',
    },
  },
  work: {
    title: 'Work Experience',
    army: {
      name: '육군 사이버작전센터 O작전단',
      position: '정보보호(사이버관제)병 / CERT',
      period: '2024.3 - 2025.9 / 실제 직책수행 - 2024.5 ~ 2025.9',
      task1:
        '[1] 육군 작전통제부대 대 · 내외 사이버작전상황 관리 및 침해대응사고 초기대응 임무수행',
      task2:
        '[2] 유관기관 침해행위 첩보 등을 통한 보안장비를 통한 침해지표 접근 차단',
    },
    teamgrit: {
      name: '(주)팀그릿',
      position: 'Software Engineer',
      period: '2021.8 - 2023.8',
      task1: '[1] Go언어를 이용한 미디어프로세싱 시스템 개발',
      task2: '[2] 사내 개발 문서 가이드라인 작성 및 개발 문서 관리 방안 고안',
    },
  },
  experience: {
    title: 'Experience',
    ccdc: {
      name: '2025 사이버공격방어대회 (공공부)',
      host: '국가정보원 주최 / 국가보안기술연구소 주관',
      result: '[1] 공공부 예선 20등 / 본선 15등',
    },
    gdg: {
      name: 'GDG Golang Korea',
      period: '2023.01 ~ 2024.03 / 오거나이저',
      task1: '[1] Go언어 커뮤니티 활성화를 위한 이벤트 기획 및 진행',
      task2:
        '[2] GopherCon Korea 2023 전반적인 행사 계획(준비위원회 수립 / 미디어팀 리드 / CoC팀)',
    },
  },
  projects: {
    title: 'Projects',
    project1: {
      name: "VMS(Video Management System) at {'@'}TeamGRIT, Inc.",
      description: '팀그릿에서 송출되는 영상을 저장하고 HLS 프로토콜을 사용할 수 있는 동영상 관리 시스템을 개발하였습니다.',
      period: '2022.08 ~ 2023.06',
      stack: 'Golang, FFmpeg(HLS), AWS(S3, CloudFront), GitHub Actions, Docker',
    },
    project2: {
      name: '나만의 서재',
      description: '가지고 있는 서적을 등록하여 관리하며, 독후감을 남기고 공유할 수 있는 서비스입니다.',
      period: '2026.01 ~ 2026.02',
      stack: 'Golang, Flutter, Docker, Azure(VM · DataBase for MySQL, Cache for Redis), GitHub Actions',
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
    title: '이메일 무단 수집 거부',
    content:
      '본 사이트 상에 기재(게시)되어 있는 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치(프로그램) 등을 '
      + '이용하여 무단으로 수집되는 것을 거부합니다. 이러한 거부 사항을 기재하였음에도 불구하고 무단으로 수집 및 이용할 시 '
      + '정보통신망법에 의해 형사처벌됨을 유의하시길 바랍니다.',
  },
  language: {
    korean: '한국어',
    english: 'English',
  },
};
