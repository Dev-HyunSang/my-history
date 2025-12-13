<template>
  <div class="max-w-3xl mx-auto px-6 py-12 bg-white text-black">
    <!-- Profile Section -->
    <header class="mb-12">
      <div class="flex items-center gap-6 mb-6">
        <div class="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
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
          <h3 class="font-semibold">순천향대학교</h3>
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
          <p class="text-sm text-gray-600 mb-2">2021.8 - 2023.8</p>
          <div>
            <p class="font-bold text-m">[1] 육군 작전통제부대 대 · 내외 사이버작전상황 관리 및 침해대응사고 초기대응 임무수행</p>
            <p class="font-bold text-m">[2] 내부 침해 행위 관련 육군수사단 사이버범죄 인지수사 도움</p>
            <p class="font-bold text-m">[3] 유관기관 침해행위 첩보 등을 통한 침해지표 접근 차단</p>
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
          <p  class="font-bold text-m">[1] Go언어를 이용한 미디어프로세싱 시스템 개발</p>
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
          <p class="font-bold pt-1">[1] 공공부 예선 20등 / 본선 15등</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Projects Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Projects</h2>
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-1">프로젝트명</h3>
          <p class="text-gray-700 mb-2">프로젝트 설명 및 사용 기술</p>
          <a href="#" class="text-sm hover:underline">View Project →</a>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Skills Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Skills</h2>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">Languages:</span>
          <span class="text-gray-700 ml-2">Golang, JavaScript, TypeScript, Python</span>
        </div>
        <div>
          <span class="font-semibold">Frameworks:</span>
          <span class="text-gray-700 ml-2">net/http(Go),Fiber(Go), Ent(Go) Vue.js</span>
        </div>
        <div>
          <span class="font-semibold">Cyber Security Equipment:</span>
          <span class="text-gray-700 ml-2">Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · IDS, Genian NAC</span>
        </div>
      </div>
    </section>
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
