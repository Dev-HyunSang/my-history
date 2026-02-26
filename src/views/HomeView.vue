<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <!-- Theme & Language Toggle -->
    <div class="flex justify-end mb-6 gap-2">
      <button
        type="button"
        @click="toggleTheme"
        class="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle Theme"
      >
        <SunIcon v-if="isDark" class="w-5 h-5" />
        <MoonIcon v-else class="w-5 h-5" />
      </button>

      <div class="inline-flex rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden">
        <button
          type="button"
          @click="changeLanguage('ko')"
          :class="[
            'px-4 py-2 text-sm font-medium transition-colors',
            currentLocale === 'ko'
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
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
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
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
          <p class="text-lg text-gray-700 dark:text-gray-300">{{ t('profile.title') }}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          href="https://blog.hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <NewspaperIcon class="w-5 h-5" />
          <span>{{ t('profile.blog') }}</span>
        </a>
        <a
          href="https://github.com/dev-hyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <CodeBracketIcon class="w-5 h-5" />
          <span>{{ t('profile.github') }}</span>
        </a>
        <a
          href="mailto:me@hyunsang.dev"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <EnvelopeIcon class="w-5 h-5" />
          <span>{{ t('profile.email') }}</span>
        </a>
        <a
          href="https://linkedin.com/in/parkhyunsang"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <BriefcaseIcon class="w-5 h-5" />
          <span>{{ t('profile.linkedin') }}</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1kINYVf1PXgfA7UO0NlWUA5INtrNXQQ5E/view?usp=sharing"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <DocumentTextIcon class="w-5 h-5" />
          <span>{{ t('profile.resume') }}</span>
        </a>
      </div>
    </header>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Education Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('education.title') }}</h2>
      <div class="space-y-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('education.school1.name') }}</span>
          </div>
          <p class="text-gray-700 dark:text-gray-300">{{ t('education.school1.major') }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('education.school1.period') }}</p>
        </div>
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('education.school2.name') }}</span>
          </div>
          <p class="text-gray-700 dark:text-gray-300">{{ t('education.school2.major') }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('education.school2.period') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Work Experience Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('work.title') }}</h2>
      <div class="space-y-6 mb-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('work.army.name') }}</span>
          </div>
          <p class="text-gray-700 dark:text-gray-300">{{ t('work.army.position') }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('work.army.period') }}</p>
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
          <p class="text-gray-700 dark:text-gray-300">{{ t('work.teamgrit.position') }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('work.teamgrit.period') }}</p>
          <p class="font-semibold text-m">{{ t('work.teamgrit.task1') }}</p>
          <p class="font-semibold text-m">{{ t('work.teamgrit.task2') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Experience Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('experience.title') }}</h2>
      <div class="space-y-3">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('experience.ccdc.name') }}</span>
          </div>
          <p class="text-m text-gray-600 dark:text-gray-400 mt-1">{{ t('experience.ccdc.host') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.ccdc.result') }}</p>
        </div>
      </div>
      <div class="space-y-3 mt-4">
        <div>
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('experience.gdg.name') }}</span>
          </div>
          <p class="text-m text-gray-600 dark:text-gray-400 mt-1">{{ t('experience.gdg.period') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.gdg.task1') }}</p>
          <p class="font-semibold pt-1">{{ t('experience.gdg.task2') }}</p>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Projects Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('projects.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('projects.project1.name') }}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('projects.project1.period') }}</p>
          <p class="text-gray-700 dark:text-gray-300 mt-2">{{ t('projects.project1.description') }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ t('projects.project1.stack') }}</p>
          <div class="flex gap-2 mt-3">
            <a v-if="t('projects.project1.github') && t('projects.project1.github') !== 'projects.project1.github'" :href="t('projects.project1.github')" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
              <CodeBracketIcon class="w-5 h-5" />
            </a>
            <a v-if="t('projects.project1.blog') && t('projects.project1.blog') !== 'projects.project1.blog'" :href="t('projects.project1.blog')" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Blog">
              <NewspaperIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div class="flex items-center gap-2 text-xl">
            <span class="font-semibold">{{ t('projects.project2.name') }}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('projects.project2.period') }}</p>
          <p class="text-gray-700 dark:text-gray-300 mt-2">{{ t('projects.project2.description') }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ t('projects.project2.stack') }}</p>
          <div class="flex gap-2 mt-3">
            <a v-if="t('projects.project2.github') && t('projects.project2.github') !== 'projects.project2.github'" :href="t('projects.project2.github')" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
              <CodeBracketIcon class="w-5 h-5" />
            </a>
            <a v-if="t('projects.project2.blog') && t('projects.project2.blog') !== 'projects.project2.blog'" :href="t('projects.project2.blog')" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Blog">
              <NewspaperIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Skills Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ t('skills.title') }}</h2>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">{{ t('skills.programming') }}</span>
          <span class="text-gray-700 dark:text-gray-300 ml-4">Golang, JavaScript, TypeScript, Python</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.frameworks') }}</span>
          <span class="text-gray-700 dark:text-gray-300 ml-4">net/http(Go), Fiber(Go), Ent(Go) Vue.js, NestJS(Study), Swagger API</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.database') }}</span>
          <span class="text-gray-700 dark:text-gray-300 ml-4">MySQL, SQLite, PostgreSQL, Redis</span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.infrastructure') }}</span>
          <span class="text-gray-700 dark:text-gray-300 ml-4">
            AWS EC2 · S3 · CloudFront, NCP Server · Object Storage, Azure Virtual Machines · DataBase for MySQL, Cache for Redis
          </span>
        </div>
        <div>
          <span class="font-semibold">{{ t('skills.security') }}</span>
          <span class="text-gray-700 dark:text-gray-300 ml-4">Splunk SIEM, AhnLab SOAR, AhnLab UTM · TMS · IPS · IDS, Genian NAC</span>
        </div>
      </div>
    </section>

    <hr class="my-8 border-gray-300 dark:border-gray-700">

    <!-- Email Collection Notice -->
    <footer class="mb-8">
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 class="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">{{ t('footer.title') }}</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
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
  SunIcon,
  MoonIcon,
} from '@heroicons/vue/24/outline';

@Options({
  components: {
    NewspaperIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    SunIcon,
    MoonIcon,
  },
})
export default class HomeView extends Vue {
  isDark = false;

  mounted() {
    this.isDark = document.documentElement.classList.contains('dark');
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  get currentLocale(): string {
    return this.$i18n.locale as unknown as string;
  }

  get t() {
    return this.$t.bind(this);
  }

  changeLanguage(lang: string): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.$i18n.locale = lang as any;
    localStorage.setItem('language', lang);
  }
}
</script>
