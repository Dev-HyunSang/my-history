import { Composer } from 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: Composer['t'];
    $tm: Composer['tm'];
    $rt: Composer['rt'];
    $i18n: Composer;
  }
}
