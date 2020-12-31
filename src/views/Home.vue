<template>
  <div class="home">
    <Header></Header>
    <!-- 主题信息 -->
    <section id="recent-works" style="width: 800px; margin: 0 auto;padding:auto 0;">
      <!--<div class="center wow fadeInDown">-->
      <!--<h2>服务项目</h2>-->
      <!--</div>-->

      <div class="row row_pad">
        <div class="col-xs-12 col-sm-3 goods-list" title="">
          <div class="recent-work-wrap">
            <img
              class="img-responsive"
              src="../assets/picture/a.png"
              alt=""
              style="width: 120px; height: 120px"
            />
            <h3 class="abc">NBA直播</h3>
          </div>
        </div>

        <div class="col-xs-12 col-sm-3 goods-list" title="">
          <div class="recent-work-wrap">
            <img
              class="img-responsive"
              src="../assets/picture/b.png"
              style="width: 120px; height: 120px"
            />
            <h3 class="abc">足球直播</h3>
          </div>
        </div>

        <div class="col-xs-12 col-sm-3 goods-list" title="">
          <div class="recent-work-wrap">
            <img
              class="img-responsive"
              src="../assets/picture/c.png"
              style="width: 120px; height: 120px"
            />
            <h3 class="abc">体育视频</h3>
          </div>
        </div>

        <div class="col-xs-12 col-sm-3 goods-list" title="">
          <div class="recent-work-wrap">
            <img
              class="img-responsive"
              src="../assets/picture/d.png"
              style="width: 120px; height: 120px"
            />
            <h3 class="abc">篮球直播</h3>
          </div>
        </div>
      </div>
      <!--/.row-->
    </section>
    <section class="cl  about-bg" style="margin-bottom: 0;padding:7rem 0;">
        <div class="container">
            <div class="center wow fadeInDown">
                <h2 style="text-align: center; color: #FFFFFF;">公司简介</h2>
            </div>
            <div class="in-intro">
                <div class="intro-cont fr">
                    <div class="desc-index" style="text-align:center">
                        <p>
                            <br />
                        </p>
                        <p>
                            {{this.$store.state.companyName}}旗下APP直播软件平台，是一款品类较全的体育赛事视频直播平台，提供免费NBA和CBA直播、足球直播、台球比赛等热门赛事直播,其提供高清流畅有趣的赛事观看体验，让看球赛变得更有趣。
                        </p>

                        <p>
                            <br />
                        </p>
                    </div>
                    <div class="intro-title"><a class="more-box" href="intro.html" tabindex="0" rel="nofollow">公司简介</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cl news-bg " style="margin-top: 0; padding-top: 100px;">
        <div class="container text">
            <div class="title-box info">
                <a title="新闻资讯" href="news.html">
                    <h2>新闻资讯</h2>
                </a>
            </div>
            <div class="cl news-list">
                <ul class="index-news">
                    <li class="col-sm-4">
                        <div class="news-info-i">
                            <h1>篮球运动是1891年由詹姆斯·奈史密斯发明的</h1>
                            <p class="newinfo-time"><span class="glyphicon glyphicon-time"
                                    aria-hidden="true"></span>2020-02-01&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></p>
                            <p class="dynamic-text">他在篮球国际训练学校任教...</p>
                            <a class="more-box" title="" href="news.html" tabindex="0">查看更多</a>
                        </div>
                    </li>
                    <li class="col-sm-4">
                        <div class="news-info-i">
                            <h1>最初篮球游戏比较简单，场地大小和参加游戏的人数没有限制</h1>
                            <p class="newinfo-time"><span class="glyphicon glyphicon-time"
                                    aria-hidden="true"></span>2020-02-01&nbsp;&nbsp;&nbsp;&nbsp;<span
                                    class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></p>
                            <p class="dynamic-text">比赛队员分成人数相等的两队，分别站在球场的两端...</p>
                            <a class="more-box" title="" href="news.html" tabindex="0">查看更多</a>
                        </div>
                    </li>
                    <li class="col-sm-4">
                        <div class="news-info-i">
                            <h1>篮球比赛的标准场地长28米、宽15米</h1>
                            <p class="newinfo-time"><span class="glyphicon glyphicon-time"
                                    aria-hidden="true"></span>2020-02-01&nbsp;&nbsp;&nbsp;&nbsp;<span
                                    class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></p>
                            <p class="dynamic-text">
                                四条界线外不得有任何障碍物，如在室内则天花板的高度应至少为7米...</p>
                            <a class="more-box" title="" href="news.html" tabindex="0">查看更多</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="cl index_load_more" style=""><a class="more-box" href="news.html" tabindex="0">更多资讯</a></div>
        </div>
    </section>
     
     <!-- 联系信息 -->
    <section id="conatcat-info">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <div class="media contact-info wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="pull-left">
                            <i class="fa fa-phone"></i>
                        </div>
                        <transition name="fade">
                        <div id="show" v-if="show1" class="media-body text" >
                            <ul class="footer-nav-contact">
                                <h2>{{this.$store.state.companyName}}</h2>
                                <li>联系人：{{this.$store.state.contacts}}
 </li>
                                <li>电&nbsp;话：{{this.$store.state.number}}</li>
                                <li>Q&nbsp;Q：{{this.$store.state.QQ}}</li>

                                <li>地&nbsp;址： {{this.$store.state.address}}

 </li>
                            </ul>
                        </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <!--/.container-->
    </section>
    <!-- 底部信息 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import "../assets/js/index"
import Header from "../components/Header.vue";
import Footer from "../components/Footer"
import $ from "jquery"

export default {
  name: "Home",
  data(){
    return{
      show1:true
    }
  },
  components: {
    Header,Footer,
  },
  created() {
    
    // console.log($("#span1").html())
    
        $("#menu >li").hover(
            function () {
                console.lgo(1)
            })
            
  },
  methods:{
    
  }
  
}
</script>
<style scoped>
.row_pad{
  padding-top:60px;
  
}
.text{
  /* display:none; */
  text-align:left
}
.abc {
  text-align: left;
  margin-bottom: 1em;
  margin-top: 10px;
  padding-left:3rem;
  /* margin-left: 30px; */
}
</style>
