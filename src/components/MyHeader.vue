<template>
  <div class="hhh">
    <div class="header">
      <ul class="zdy-zu">
        <div style="width: 100px;height: 100px;"></div>
        <img src="../assets/logo.png" alt="" />
        <li>首页</li>
        <li> <a href="https://www.baidu.com"> 热门景点</a></li>
        <li>旅游套餐</li>
        <li>关于我们</li>
        <li>客户反馈</li>
        <li>联系我们</li>
        <li>旅游签证</li>
        <li></li>
        <li></li>
        <div class="dl" style="color: white">
          <img src="../assets/denglu.png" alt="" /><span>登录</span>
        </div>
        <div class="zc" style="color: white">
          <img src="../assets/zhuce.png" alt="" /><span>注册</span>
        </div>
        <div style="width: 100px;height: 100px;"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.zdy-zu {
  list-style: none;
  width: 100%;
  background-color: transparent;
  // background-color: #000;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  li {
    font-size: 16px;
    color: white;
    padding: 10px;
    border: 1px solid transparent;
    position: relative;
    user-select: none;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      border-bottom: 2px solid #fff;
      left: 50%;
      right: 50%;
      bottom: 0;
      transition: all 0.5s linear;
    }
    &:hover:after {
      left: 0;
      right: 0;
    }
  }
}
.hhh
{
  position: relative;
}
.header {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
}

.dl,
.zc {
  user-select: none;
  cursor: pointer;
}


// .el-menu-item:nth-child(n + 1) {
//   font-size: 20px;
//   margin-right: 50px;
// }
</style>
