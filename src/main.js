import { createApp } from "vue";
import App from "./App.vue";

import i18next from "i18next";
import I18NextVue from "i18next-vue";
import lang_en from "./locale/en.json";
import lang_tr from "./locale/tr.json";
import LanguageDetector from 'i18next-browser-languagedetector'

// router
import router from "./router";

// bootstrap bundle
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import { createMetaManager, defaultConfig } from "vue-meta";
const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: "meta", nameless: true },
});

// font aswesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub, faFileLines);

i18next
  .use(LanguageDetector)
  .init({ 
    fallbackLng: 'en',
    resources: {
      en: {
        common: lang_en,
      },
      tr: {
        common: lang_tr,
      },
    },
  });

const app = createApp(App);

app.use(I18NextVue, {
  i18next: i18next,
  rerenderOn: ['languageChanged'],
})
  .use(bootstrap)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(metaManager);

app.mount('#app');