<template>
  <div>
     <!-- 头部 -->
    <header id="header">
        <nav class="navbar navbar-inverse" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/">
                    
                    
                        <span class="navbar-brand">
                        <dl class="logo-dl">
                            <dt>{{this.$store.state.companyName}}</dt>
                            <!--<dd>Wuxi Luoshe Caisheng Plastic Processing Plantv</dd>-->
                        </dl>
                        <!--<img src="static/picture/logo.png" alt="logo">--></span>
                    
                    </router-link>
                </div>
                <div class="collapse navbar-collapse navbar-right">
                    <ul id="menu" class="nav navbar-nav">
                        
                        <li class="first-head-nav"><router-link to="/">网站首页</router-link></li>
                        <li class="first-head-nav"><router-link to="/intro">公司简介</router-link></li>
                        <li class="first-head-nav"><router-link to="/app">app介绍</router-link></li>
                        <li class="first-head-nav"><router-link to="/news">新闻资讯</router-link></li>
                        <li class="first-head-nav"><router-link to="/contact">联系我们</router-link></li>
                    </ul>
                </div>
            </div>
            <!--/.container-->
        </nav>
        <!--/nav-->
    </header>
    <!--/header-->
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
        <!--<ol class="carousel-indicators">-->
        <!--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>-->
        <!--</ol>-->
        <!-- Carousel items -->
        <router-link to="/app">
            
                <div class="carousel-inner">
                    <div class="active item"><img src="../assets/picture/5962ea1cc9ca6.jpg" /> </div>
                </div>
            
        </router-link>
        <!-- Carousel nav -->
        <!--<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>-->
        <!--<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>-->
    </div>
  </div>
</template>

<script>
// css 全部样式
import "../assets/js/index"
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {
    
  },
  mounted() {},
  watch: {},
};
</script>

<style scoped >
.abc {
  margin-bottom: 1em;
  margin-top: 10px;
  margin-left: 30px;
}
</style>
