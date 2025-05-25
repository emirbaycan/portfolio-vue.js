<template>
    <ul class="languages">
        <li class="language"><a href="#" v-on:click="changeLanguage('en')">EN</a></li>
        <li class="language"><a href="#" v-on:click="changeLanguage('tr')">TR</a></li>
    </ul>
</template>

<script>
export default {
    name: "LanguageChanger",
    methods: {
        changeLanguage(lang) {
            this.$i18next.changeLanguage(lang);
        }
    }
}
</script>

<style lang="scss">
    .languages{
        display:flex;
        flex-direction: row;
        padding:0 !important;
        margin:0 !important;

        .language{
            list-style: none;
        }
        
        .language:first-child{
            margin-right:1rem;
        }
        .language:last-child{
            margin-left: auto;
        }
    }
</style>