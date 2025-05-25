<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="main-nav">
    <div class="container">
      <a class="logo navbar-brand d-flex align-items-center" href="#">
        <slot></slot>
      </a>
      <button aria-controls="navbar4" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
        data-bs-target="#navbar4" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse bg-white" id="navbar4">
        <ul class="navbar-nav ms-auto">
          <li v-for="link in t('links', { returnObjects: true })" :key="link.name" class="nav-item px-lg-2">
            <a class="nav-link" :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
        <language-changer></language-changer>
      </div>
    </div>
  </nav>
</template>
<script setup>
    const { t } = useTranslation('common');
</script>

<script>
import LanguageChanger from '../reusable/LanguageChanger.vue';
import { useTranslation } from "i18next-vue";

export default {
  props: ["links"],
  name: "AppMenu",
  components: {
    LanguageChanger
  }
};
</script>
<style lang="scss" scoped>
* {
  font-weight: 600;
}

.nav-link.active {
  border-bottom: 2px solid $primary;
}

.logo {
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-display: auto;
  font-family: monospace, monospace;
}
</style>
