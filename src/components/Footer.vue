<template>
  <div>
    <div class="footer">
      <div class="container" style="text-align:left">
        <!-- 联系信息 -->
        <p>
          © 2020 {{this.$store.state.companyName}}保留所有权利 <span style="color:#171717">{{this.$store.state.space}}</span>
          公司地址： {{this.$store.state.address}} <span style="color:#171717">{{this.$store.state.space}}</span>
          联系电话：{{this.$store.state.number}}<span style="color:#171717">{{this.$store.state.space}}</span>
          {{this.$store.state.contact}}：{{this.$store.state.QQ}} 
        </p>

        <div class="line-style"></div>
        <!--  -->
        <div style="color: #aaa; font-size: 1px">
          <p>开发者:{{this.$store.state.companyName}}  / 版本:v1.3.0 /</p>
          <p>
            隐私协议:
            我们不会向任何第三方提供、出售、出租、分享和交易用户的个人信息，除非第三方和中华自动化一起
            <br />
            为网站和用户提供服务并且在该服务结束后已将被禁止访问包括其以前能够访问的所有这些资料。当我们被法律强
            <br />
            制或依照政府要求提供您的信息时我们将善意地披露您的资料。
          </p>
          <p>用户权限:读取设备储存空间以及位置信息</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script id="jsgovicon" src="static/js/govicon.js"  type="text/javascript"  ></script>
<script>
import "../assets/js/index";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style scoped >
</style>
