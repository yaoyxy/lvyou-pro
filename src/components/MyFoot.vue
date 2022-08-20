<template>
  <div class="my-foot" style="background: white">
    <div class="foot">
      <!-- 第一列 -->
      <div class="zdy-one">
        <h3>联系我们</h3>
        <p>/ contact</p>
      </div>
      <!-- 第二列 -->
      <div class="zdy-two">
        <h3>巴黎旅游定制服务</h3>
        <div>
          <p>地址: 湖北省武汉市洪山区</p>
          <p>杨家湾地铁口五环天地</p>
          <p>邮编: 10010</p>
          <p>电话: 153-2786-7744</p>
        </div>
        <div>
          <p>电话: 153-2786-7744</p>
          <p>手机: 153-2786-7744</p>
          <p>传真: 153-2786-7744</p>
          <p>邮箱: 1158929196@qq.com</p>
        </div>
      </div>
      <!-- 第三列 -->
      <div class="zdy-three">
        <h3>关注我们</h3>
        <img
          src="../assets/foot/erweima.jpg"
          style="height: 100px; width: 100px; margin-top: 18px"
          alt=""
        />
      </div>
      <!-- 第四列 -->
      <div>
        <img class="img" src="../assets/foot/xiaotubiao.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.foot {
  width: 1000px;
  height: 150px;
  margin: 0 auto;
  background: white;
  font-size: 12px;
  color: #808080;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  p {
    margin: 10px 10px 0 0;
  }
}
.zdy-two div {
  display: inline-block;
  margin: 15px 15px 10px 0;
}
.img {
  width: 32px;
  height: 32px;
  background-position: -128px 0;
}
</style>
