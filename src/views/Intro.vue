<template>
    <div>
      <Header></Header>
      <section id="blog" class="container" style="padding:8rem 0rem;">
        <ul class="breadcrumb" style="text-align:left;padding:1rem 1rem;">
            <li><router-link to="/">首页</router-link></li>
            <li class="active">公司简介</li>
        </ul>
        <div class="blog">
            <div class="row">
                <div class="col-md-12 content-detail">
                    <h2  class="title-detail">公司简介</h2>
                    <p>
	<br />
</p>
<p>{{this.$store.state.companyName}}旗下APP直播软件平台，是一款品类较全的体育赛事视频直播平台，提供免费NBA和CBA直播、足球直播、台球比赛等热门赛事直播,其提供高清流畅有趣的赛事观看体验，让看球赛变得更有趣。
</p>

                    <div align="center">
                        <img src="../assets/picture/01.jpg" alt="">
                    </div>

<p>
	<br />
</p>                </div><!--/.col-md-8-->
            </div><!--/.row-->
        </div><!--/.blog-->
    </section>
    <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import $ from "jquery"
import "../assets/js/index"


export default {
    props: {

    },
    components: {
      Header,Footer
    },
    data() {
        return {

        };
    },
    methods: {
      _ready(){
        $('#myCarousel').carousel({
            interval: 2000
        })
      }
    },
    computed: {

    },
    created() {
     this. _ready()
    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style scoped >

</style>
