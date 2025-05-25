<template>
  <!-- Menu -->
  <MenuVue :links="links">Emir&nbsp;<span class="prim">Baycan</span></MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>{{ t('about.welcome') }}</template>
    {{ t('about.description') }}
    <template v-slot:buttons>
      <simple-button class="btn-primary text-white" :url="t('socials.0.url')" icon="fab linkedin-in">{{
    t('about.hire_me') }}</simple-button>
      <simple-button class="btn-outline-secondary" :url="'mailto:'+t('email')" icon="fa-regular fa-file-lines">{{
    t('about.contact_me') }}</simple-button>
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script setup>
    const { t } = useTranslation('common');
</script>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import { useTranslation } from "i18next-vue";

export default {
  name: "HomeView",
  data: () => {
    const { t } = useTranslation('common');

    const awards = t('awards', { returnObjects: true });
    const experience = t('experiences', { returnObjects: true });
    const projects = t('projects', { returnObjects: true });
    const skills = t('skills', { returnObjects: true });
    const socials = t('socials', { returnObjects: true });

    return {
      delay: 100,
      skills,
      experience,
      awards,
      projects,
      socials: socials,
      copyright: t('copyright'),
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    ProjectsGrid,
    SimpleButton,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
