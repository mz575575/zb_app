<template>
    <div>
      <Header></Header>
        <section id="blog" class="container" style="padding:8rem 0rem;">
        <ul class="breadcrumb" style="text-align:left;padding:1rem 1rem;">
            <li><a href="index.html">首页</a></li>
            <li class="active">新闻资讯</li>
        </ul>
        <div class="blog">
            <div class="row">
                <div class="col-md-12">
                    <div class="blog-item">
                        <div class="row">
                            <div class="col-xs-12 col-sm-2 text-center">
                                <div class="entry-meta">
                                    <span id="publish_date">新闻资讯</span>
                                    <span><i class="fa  fa-clock-o"></i> <a>2020-01-06</a></span>
                                    <span><i class="fa  fa-eye"></i> <a>330</a></span>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-10 blog-content">
                                <h2>
                                    <router-link to="/new">
                                        篮球运动是1891年由詹姆斯·奈史密斯发明的
                                    </router-link>
                                    
                                </h2>
                                <h3>
                                    篮球运动是1891年由詹姆斯·奈史密斯发明的
                                </h3>
                                <router-link to="/new">
                                 <span class="btn btn-primary readmore">阅读详情<i class="fa fa-angle-right"></i> </span>
                                </router-link>
                                
                            </div>
                        </div>
                    </div><!--/.blog-item-->

                </div>
                <!--/.col-md-8-->
            </div><!--/.row-->
        </div>
    </section><!--/#blog-->

      <Footer></Footer>
    </div>
</template>

<script>
import "../assets/js/index"
import Header from "../components/Header"
import Footer from "../components/Footer"
import $ from "jquery"
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
      this._ready()
    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style scoped >

</style>
