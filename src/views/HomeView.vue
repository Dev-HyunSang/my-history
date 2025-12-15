<template>
  <div class="max-w-3xl mx-auto px-6 py-12 bg-white text-black">
    <!-- Profile Section -->
    <header class="mb-12">
      <div class="flex items-center gap-6 mb-6">
        <div>
          <img class="w-24 h-24 rounded-full flex-shrink-0 object-cover" src="../assets/profile.jpg" alt="박현상 프로필 사진" />
        </div>
        <div>
          <h1 class="text-3xl font-bold mb-1">박현상, HyunSang Park</h1>
          <p class="text-lg text-gray-700">Software Engineer</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <a
          href="https://blog.hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <NewspaperIcon class="w-5 h-5" />
          <span>Blog</span>
        </a>
        <a
          href="https://github.com/dev-hyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <CodeBracketIcon class="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:me@hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <EnvelopeIcon class="w-5 h-5" />
          <span>Email</span>
        </a>
        <a
          href="https://linkedin.com/in/parkhyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <BriefcaseIcon class="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>

    <hr class="my-8 border-gray-300">

    <!-- Education Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Education</h2>
      <div class="space-y-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">순천향대학교</span>
          </div>
          <p class="text-gray-700">정보보호학, 학사</p>
          <p class="text-sm text-gray-600">2023.2 - 2029.2</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Work Experience Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
      <div class="space-y-6 mb-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">육군 사이버작전센터 O작전단</span>
          </div>
          <p class="text-gray-700">정보보호(사이버관제)병 / CERT</p>
          <p class="text-sm text-gray-600 mb-2">2024.3 - 2025.9 / 실제 직책수행 - 2024.5 ~ 2025.9</p>
          <div>
            <p class="font-semibold text-m">[1] 육군 작전통제부대 대 · 내외 사이버작전상황 관리 및 침해대응사고 초기대응 임무수행</p>
            <p class="font-semibold text-m">[2] 내부 침해 행위 관련 육군수사단 사이버범죄 인지수사 도움</p>
            <p class="font-semibold text-m">[3] 유관기관 침해행위 첩보 등을 통한 침해지표 접근 차단</p>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">(주)팀그릿</span>
          </div>
          <p class="text-gray-700">Software Engineer</p>
          <p class="text-sm text-gray-600 mb-2">2021.8 - 2023.8</p>
          <p  class="font-semibold text-m">[1] Go언어를 이용한 미디어프로세싱 시스템 개발</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Awards Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Experience</h2>
      <div class="space-y-3">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">2025 사이버공격방어대회 (공공부)</span>
          </div>
          <p class="text-m text-gray-600 mt-1">국가정보원 주최 / 국가보안기술연구소 주관</p>
          <p class="font-semibold pt-1">[1] 공공부 예선 20등 / 본선 15등</p>
        </div>
      </div>
      <div class="space-y-3 mt-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">GDG Golang Korea</span>
          </div>
          <p class="text-m text-gray-600 mt-1">2023.01 ~ 2024.03 / 오거나이저</p>
          <p class="font-semibold pt-1">[1] Go언어 커뮤니티 활성화를 위한 이벤트 기획 및 진행</p>
          <p class="font-semibold pt-1">[2] GopherCon Korea 2023 전반적인 행사 계획(준비위원회 수립 / 미디어팀 리드 / CoC팀)</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Projects Section -->
    <!-- <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Projects</h2>
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-1">프로젝트명</h3>
          <p class="text-gray-700 mb-2">프로젝트 설명 및 사용 기술</p>
          <a href="#" class="text-sm hover:underline">View Project →</a>
        </div>
      </div>
    </section> -->

    <!-- <hr class="my-8 border-gray-300"> -->

    <!-- Skills Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Skills</h2>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">Programming Languages</span>
          <span class="text-gray-700 ml-4">Golang, JavaScript, TypeScript, Python</span>
        </div>
        <div>
          <span class="font-semibold">Frameworks</span>
          <span class="text-gray-700 ml-4">net/http(Go), Fiber(Go), Ent(Go) Vue.js</span>
        </div>
        <div>
          <span class="font-semibold">DataBase</span>
          <span class="text-gray-700 ml-4">MySQL, SQLite, PostgreSQL</span>
        </div>
        <div>
          <span class="font-semibold">Cyber Security Equipment</span>
          <span class="text-gray-700 ml-4">Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · IDS, Genian NAC</span>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Email Collection Notice -->
    <footer class="mb-8">
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-bold mb-3 text-gray-800">이메일 무단 수집 거부</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          본 사이트 상에 기재(게시)되어 있는 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치(프로그램) 등을 이용하여 무단으로 수집되는 것을 거부합니다.
          이러한 거부 사항을 기재하였음에도 불구하고 무단으로 수집 및 이용할 시 정보통신망법에 의해 형사처벌됨을 유의하시길 바랍니다.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {
  NewspaperIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from '@heroicons/vue/24/outline';

@Options({
  components: {
    NewspaperIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    BriefcaseIcon,
  },
})

export default class HomeView extends Vue {}
</script>
