<template>
  <div>
    <Header></Header>
      <section id="blog" class="container" style="padding:8rem 0rem;">
        <ul class="breadcrumb" style="text-align:left;padding:1rem 1rem;">
            <li>          <router-link to="/">首页</router-link>
</li>
            <li class="active">联系我们</li>
        </ul>
        <div class="blog">
            <div class="row">
                <div class="media contact-info wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="pull-left">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="media-body" style="text-align:left">
                            <ul class="footer-nav-contact">
                                <h2>{{this.$store.state.companyName}}</h2>
                                <li>联系人：{{this.$store.state.contacts}}
 </li>
                                <li>电&nbsp;话：{{this.$store.state.number}}</li>
                                <li>{{this.$store.state.contact}}&nbsp;：{{this.$store.state.QQ}}</li>
                                <li>地&nbsp;址： {{this.$store.state.address}}

  &nbsp;&nbsp;</li>
                            </ul>
                        </div>
                    </div>
            </div><!--/.row-->
        </div><!--/.blog-->
    </section><!--/#blog-->
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/js/index";
import Header from "../components/Header";
import Footer from "../components/Footer";
import $ from "jquery";
export default {
  props: {},
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    _ready() {
      $("#myCarousel").carousel({
        interval: 2000,
      });
    },
  },
  computed: {},
  created() {this._ready()},
  mounted() {},
  watch: {},
};
</script>

<style scoped >
</style>
