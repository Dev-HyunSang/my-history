<template>
  <div class="max-w-3xl mx-auto px-6 py-12 bg-white text-black">
    <!-- Language Toggle -->
    <div class="flex justify-end mb-6">
      <div class="inline-flex rounded-lg border border-gray-300 overflow-hidden">
        <button
          type="button"
          @click="changeLanguage('ko')"
          :class="[
            'px-4 py-2 text-sm font-medium transition-colors',
            currentLocale === 'ko'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50',
          ]"
        >
          {{ t('language.korean') }}
        </button>
        <button
          type="button"
          @click="changeLanguage('en')"
          :class="[
            'px-4 py-2 text-sm font-medium transition-colors',
            currentLocale === 'en'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50',
          ]"
        >
          {{ t('language.english') }}
        </button>
      </div>
    </div>

    <!-- Profile Section -->
    <header class="mb-12">
      <div class="flex items-center gap-6 mb-6">
        <div>
          <img
            class="w-24 h-24 rounded-full flex-shrink-0 object-cover"
            src="../assets/profile.jpg"
            :alt="t('profile.name')"
          />
        </div>
        <div>
          <h1 class="text-3xl font-bold mb-1">{{ t('profile.name') }}</h1>
          <p class="text-lg text-gray-700">{{ t('profile.title') }}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          href="https://blog.hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <NewspaperIcon class="w-5 h-5" />
          <span>{{ t('profile.blog') }}</span>
        </a>
        <a
          href="https://github.com/dev-hyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <CodeBracketIcon class="w-5 h-5" />
          <span>{{ t('profile.github') }}</span>
        </a>
        <a
          href="mailto:me@hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <EnvelopeIcon class="w-5 h-5" />
          <span>{{ t('profile.email') }}</span>
        </a>
        <a
          href="https://linkedin.com/in/parkhyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <BriefcaseIcon class="w-5 h-5" />
          <span>{{ t('profile.linkedin') }}</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1kINYVf1PXgfA7UO0NlWUA5INtrNXQQ5E/view?usp=sharing"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <DocumentTextIcon class="w-5 h-5" />
          <span>{{ t('profile.resume') }}</span>
        </a>
      </div>
    </header>

    <hr class="my-8 border-gray-300">

    <!-- Education Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('education.title') }}</h2>
      <div class="space-y-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('education.school1.name') }}</span>
          </div>
          <p class="text-gray-700">{{ t('education.school1.major') }}</p>
          <p class="text-sm text-gray-600">{{ t('education.school1.period') }}</p>
        </div>
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('education.school2.name') }}</span>
          </div>
          <p class="text-gray-700">{{ t('education.school2.major') }}</p>
          <p class="text-sm text-gray-600">{{ t('education.school2.period') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Work Experience Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('work.title') }}</h2>
      <div class="space-y-6 mb-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('work.army.name') }}</span>
          </div>
          <p class="text-gray-700">{{ t('work.army.position') }}</p>
          <p class="text-sm text-gray-600 mb-2">{{ t('work.army.period') }}</p>
          <div>
            <p class="font-semibold text-m">{{ t('work.army.task1') }}</p>
            <p class="font-semibold text-m">{{ t('work.army.task2') }}</p>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('work.teamgrit.name') }}</span>
          </div>
          <p class="text-gray-700">{{ t('work.teamgrit.position') }}</p>
          <p class="text-sm text-gray-600 mb-2">{{ t('work.teamgrit.period') }}</p>
          <p class="font-semibold text-m">{{ t('work.teamgrit.task1') }}</p>
          <p class="font-semibold text-m">{{ t('work.teamgrit.task2') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Experience Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('experience.title') }}</h2>
      <div class="space-y-3">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('experience.ccdc.name') }}</span>
          </div>
          <p class="text-m text-gray-600 mt-1">{{ t('experience.ccdc.host') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.ccdc.result') }}</p>
        </div>
      </div>
      <div class="space-y-3 mt-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('experience.gdg.name') }}</span>
          </div>
          <p class="text-m text-gray-600 mt-1">{{ t('experience.gdg.period') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.gdg.task1') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.gdg.task2') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Projects Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('projects.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('projects.project1.name') }}</span>
          </div>
          <p class="text-sm text-gray-600">{{ t('projects.project1.period') }}</p>
          <p class="text-gray-700 mt-2">{{ t('projects.project1.description') }}</p>
          <p class="text-sm text-gray-500 mt-2">{{ t('projects.project1.stack') }}</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('projects.project2.name') }}</span>
          </div>
          <p class="text-sm text-gray-600">{{ t('projects.project2.period') }}</p>
          <p class="text-gray-700 mt-2">{{ t('projects.project2.description') }}</p>
          <p class="text-sm text-gray-500 mt-2">{{ t('projects.project2.stack') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Skills Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('skills.title') }}</h2>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">{{ t('skills.programming') }}</span>
          <span class="text-gray-700 ml-4">Golang, JavaScript, TypeScript, Python</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.frameworks') }}</span>
          <span class="text-gray-700 ml-4">net/http(Go), Fiber(Go), Ent(Go) Vue.js, NestJS(Study)</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.database') }}</span>
          <span class="text-gray-700 ml-4">MySQL, SQLite, PostgreSQL</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.infrastructure') }}</span>
          <span class="text-gray-700 ml-4">
            AWS EC2 · S3 · CloudFront, NCP Server · Object Storage, Azure Virtual Machines · DataBase for MySQL, Cache for Redis
          </span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.security') }}</span>
          <span class="text-gray-700 ml-4">Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · IDS, Genian NAC</span>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300">

    <!-- Email Collection Notice -->
    <footer class="mb-8">
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-bold mb-3 text-gray-800">{{ t('footer.title') }}</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          {{ t('footer.content') }}
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
  DocumentTextIcon,
} from '@heroicons/vue/24/outline';

@Options({
  components: {
    NewspaperIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    DocumentTextIcon,
  },
})
export default class HomeView extends Vue {
  get currentLocale(): string {
    return this.$i18n.locale as unknown as string;
  }

  get t() {
    return this.$t.bind(this);
  }

  changeLanguage(lang: string): void {
    this.$i18n.locale = lang as any;
    localStorage.setItem('language', lang);
  }
}
</script>
