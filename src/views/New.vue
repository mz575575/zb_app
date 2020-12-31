<template>
    <div>
      <Header></Header>
         <section id="blog" class="container" style="padding:8rem 0rem;">
        <ul class="breadcrumb" style="text-align:left;padding:1rem 1rem;">
          
          
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/news">新闻资讯</router-link></li>
            <li class="active">详情</li>
        </ul>
        <div class="blog">
            <div class="row">
                <div class="col-md-12 content-detail">
                    <h2  class="title-detail">篮球运动是1891年由詹姆斯·奈史密斯发明的</h2>
                    <p class="detail_time">发布时间：2020-01-06 16:46:02&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;点击量：330</p>
                    <img id="cover_id" src="../assets/picture/1.jpg" />
                    <p style="text-align:left">
                       篮球运动是1891年由詹姆斯·奈史密斯发明的。当时，他在篮球国际训练学校任教。由于当地盛产桃子，这里的儿童又非常喜欢玩将球投入桃子筐的游戏。这使他从中得到启发，并在足球、曲棍球等其他球类项目的特点，创编了篮球。
                    </p>

                    <!--<div class="newss">-->
                        <!--<p><span>上一篇：</span><a href="index.htmlarticle/detail/id/59.html">APP开发合同签署需要注意哪些问题？</a></p>                        -->
                        <!--<p><span>下一篇：</span><a href="index.htmlarticle/detail/id/61.html">小程序与APP从开发到上线有什么区别？</a></p>                    -->
                    <!--</div>-->
                </div>
            </div><!--/.row-->
        </div><!--/.blog-->
    </section><!--/#blog-->
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
