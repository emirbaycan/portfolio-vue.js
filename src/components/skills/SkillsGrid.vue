<template>
  <BaseContainer title="I work on...">
    <SingleSkill v-for="skill in t('skills', { returnObjects: true })" :key="skill.id" :skill="skill" />
  </BaseContainer>
</template>
<script setup>
    const { t } = useTranslation('common');
</script>

<script>
import { useTranslation } from "i18next-vue";
import SingleSkill from "./SingleSkill.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  props: ["skills"],
  name: "SkillsGrid",
  components: { SingleSkill, BaseContainer },
};
</script>
<style scoped></style>
