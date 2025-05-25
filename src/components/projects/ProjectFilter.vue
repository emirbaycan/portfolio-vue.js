<script>
import { useTranslation } from "i18next-vue";
export default {
  name: "ProjectFilter",
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    }
  },
};
</script>
<script setup>
    const { t } = useTranslation('common');
</script>
<template>
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="form-select"
  >
    <option value class="text-sm sm:text-md">{{t('all_projects')}}</option>
    <option
      v-for="option in t('project_categories',{returnObjects:true})"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
