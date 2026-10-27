export default {
  profile: {
    name: '박현상',
    title: 'Software Engineer',
    blog: 'Blog',
    github: 'GitHub',
    email: 'Email',
    linkedin: 'LinkedIn',
  },
  education: {
    title: 'Education',
    school1: {
      name: '순천향대학교',
      url: 'https://sch.ac.kr',
      major: '정보보호학(공학사)',
      position: '학부생',
      period: '2023.2 - 2029.2',
    },
    school2: {
      name: '순천향대학교',
      url: 'https://sch.ac.kr',
      major: '법학(부전공)',
      position: '학부생',
      period: '2026.2 - 2029.2',
    },
  },
  work: {
    title: 'Work Experience',
    viewDetails: '자세히 보기 →',
    back: '← 돌아가기',
    alan: {
      name: 'Alan Inc.',
      url: 'https://alango.xyz/',
      position: '소프트웨어 엔지니어',
      period: '2026.09 ~ 현재',
    },
    army: {
      name: '육군 사이버작전센터 O작전단',
      url: 'https://www.army.mil.kr/',
      position: '정보보호병',
      period: '2024.3 - 2025.9 / 관제 직책수행 - 2024.5 ~ 2025.9',
      location: '계룡시, 대한민국',
      tasks: [
        '[1] 육군 작전통제부대(육직, 작전사, 군/사단) 대/내외 사이버작전상황 관리 및 침해대응사고 초기대응 임무수행',
        '[2] Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · WAF, Genians NAC 등 보안 솔루션 및 장비 운영 및 내/외부망 사이버침해행위 식별 및 차단',
      ],
      details: [
        '육군 작전통제부대(육직, 작전사, 군/사단) 대/내외 사이버작전상황 관리 및 침해대응사고 초기대응 임무수행',
        'Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · WAF, Genians NAC 등 보안 솔루션 및 장비 운영 및 내/외부망 사이버침해행위 식별 및 차단',
        '국가정보원 주최 · 국가보안기술연구소 주관 2025 사이버공격방어대회(CCE) 공공부 본선 참여',
      ],
    },
    teamgrit: {
      name: '(주) 팀그릿',
      url: 'https://teamgrit.kr',
      position: '소프트웨어 엔지니어',
      period: '2021.8 - 2023.8',
      tasks: [
        '[1] Go언어를 이용한 미디어프로세싱 시스템 개발',
        '[2] 사내 개발 문서 가이드라인 작성 및 개발 문서 관리 방안 고안',
      ],
      details: [
        'Go언어를 이용한 미디어프로세싱 시스템 개발',
        '사내 개발 문서 가이드라인 작성 및 개발 문서 관리 방안 고안',
      ],
    },
  },
  experience: {
    title: 'Experience',
    ccdc: {
      name: '2025 사이버공격방어대회',
      url: 'https://cce.cstec.kr/',
      position: '공공부 참가자',
      tasks: [
        '[1] 국가정보원 주최 · 국가보안기술연구소 주관',
        '[2] 공공부 예선 20등 / 본선 15등',
      ],
      details: [
        '공공부 예선 20등 / 본선 15등',
      ],
    },
    gdg: {
      name: 'GDG Golang Korea',
      url: 'https://gdg.community.dev/gdg-golang-korea/',
      position: '오거나이저',
      period: '2023.01 ~ 2024.03',
      tasks: [
        '[1] Go언어 커뮤니티 활성화를 위한 이벤트 기획 및 진행',
        '[2] GopherCon Korea 2023 전반적인 행사 계획(준비위원회 수립 / 미디어팀 리드 / CoC팀)',
      ],
      details: [
        'Go언어 커뮤니티 활성화를 위한 이벤트 기획 및 진행',
        'GopherCon Korea 2023 전반적인 행사 계획(준비위원회 수립 / 미디어팀 리드 / CoC팀)',
      ],
    },
    pycon_korea: {
      name: 'PyCon Korea',
      url: 'https://www.python.or.kr/',
      position: '오거나이저',
      period: '2026.02 ~ 현재',
      tasks: [
        '[1] PyCon Korea 2026 미디어팀 활동',
        "Email -  park.hyunsang{'@'}python.or.kr",
      ],
      details: [
        'PyCon Korea 2026 미디어팀 활동',
      ],
    },
  },
  projects: {
    title: 'Projects',
    project1: {
      name: 'VMS(Video Management System) at TeamGRIT, Inc.',
      description: '팀그릿에서 송출되는 영상을 저장하고 HLS 프로토콜을 사용할 수 있는 동영상 관리 시스템을 개발하였습니다.',
      period: '2022.08 ~ 2023.06',
      stack: 'Golang, FFmpeg(HLS), AWS(S3, CloudFront), GitHub Actions, Docker',
      github: null,
      blog: null,
    },
    project2: {
      name: '나만의 서재',
      description: '자신이 소유하고 있는 서적을 ISBN 바코드 등을 이용하여 등록, 관리하며, 독후감을 남기고 사용자들에게 공유할 수 있는 서비스입니다.',
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
