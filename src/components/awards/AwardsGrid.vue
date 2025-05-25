<template>
  <base-container title="Awards">
    <single-award v-for="award in t('awards', { returnObjects: true })" :key="award.id" :award="award" />
  </base-container>
</template>
<script setup>
    const { t } = useTranslation('common');
</script>

<script>
import SingleAward from "./SingleAward.vue";
import BaseContainer from "../reusable/BaseContainer.vue";
import { useTranslation } from "i18next-vue";

export default {
  name: "AwardsGrid",
  props: ["awards"],
  components: {
    SingleAward,
    BaseContainer,
  },
};
</script>
<style lang=""></style>
