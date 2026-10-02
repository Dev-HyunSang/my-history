<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <router-link
      to="/"
      class="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
    >
      {{ t('work.back') }}
    </router-link>

    <header class="mt-6 mb-8">
      <h1 class="text-3xl font-bold mb-1">{{ t(`${base}.name`) }}</h1>
      <p v-if="$te(`${base}.position`)" class="text-lg text-gray-700 dark:text-gray-300">{{ t(`${base}.position`) }}</p>
      <p v-if="$te(`${base}.host`)" class="text-lg text-gray-700 dark:text-gray-300">{{ t(`${base}.host`) }}</p>
      <p v-if="$te(`${base}.period`)" class="text-sm text-gray-600 dark:text-gray-400">{{ t(`${base}.period`) }}</p>
    </header>

    <ul class="list-disc pl-5 space-y-3">
      <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
    </ul>

    <div v-if="images.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <img
        v-for="src in images"
        :key="src"
        :src="src"
        :alt="t(`${base}.name`)"
        loading="lazy"
        class="w-full rounded-lg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

// 상세 페이지에서만 보여줄 사진. 파일은 public/images/ 아래에 두고 경로를 적는다.
// 예) 'work.army': ['/images/work/army/1.jpg', '/images/work/army/2.jpg'],
const IMAGES: Record<string, string[]> = {
};

// work / experience 상세 페이지 공용 (/:section/:id)
export default class WorkDetailView extends Vue {
  get base(): string {
    return `${this.$route.params.section}.${this.$route.params.id}`;
  }

  get t() {
    return this.$t.bind(this);
  }

  get images(): string[] {
    return IMAGES[this.base] || [];
  }

  get details(): string[] {
    const messages = this.$tm(`${this.base}.details`) as unknown;
    return Array.isArray(messages) ? messages.map((message) => this.$rt(message)) : [];
  }
}
</script>
