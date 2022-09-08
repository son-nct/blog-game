<template>
    <div>
        <the-header />
        <slide-show />
        <about-us />
        <download />
        <about-us />
        <the-footer />
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import SlideShow from '../components/layout/SlideShow.vue'
import AboutUs from '../components/layout/AboutUs.vue'
import Download from '../components/layout/Download.vue'
import TheFooter from '../components/layout/TheFooter.vue'

export default {
    components: {
        TheHeader,
        SlideShow,
        AboutUs,
        Download,
        TheFooter
    }
}
</script>

<style>

</style>