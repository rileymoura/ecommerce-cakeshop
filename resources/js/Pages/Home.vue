<template>
    <Header></Header>
    <Hero></Hero>
    <Footer></Footer>
</template>

<script>
import Header from '../Components/Header.vue';
import Hero  from '../Components/Home/Hero.vue';
import MainCarousel from '../Components/Home/MainCarousel.vue'
import Footer from '../Components/Footer.vue';

export default {
    components: {
        Header,
        Hero,
        MainCarousel,
        Footer
    }
}
</script>
