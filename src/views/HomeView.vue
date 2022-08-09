<template>
  <div id="app1">
    <div style="margin: 0 auto">
      <div class="zdy-a">
        <div>
          <img src="../assets/tubiao.png" alt="" />
          <h1 style="padding: 25px">AFFORDABLE PARIS TOURS</h1>
          <span>CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
          <br />
          <button class="btn">VIEW TOURS</button>
        </div>
      </div>

      <img class="bj" src="../assets/bj.png" style="" alt="" />
      <!-- <img
        src="../assets/lunbotu.png"
        style="width: 100%; display: block"
        alt=""
      /> -->
      <video
        src="../assets/video/sy.webm"
        style="width: 100%; display: block"
        autoplay
        muted
        loop
      ></video>

      <div style="height: 300px; width: 100%; background: #000"></div>
      <div
        style="height: 300px; width: 100%; background: rgba(0, 0, 0, 0.5)"
      ></div>
      <div style="height: 800px; background: white"></div>
    </div>
  </div>
</template>

<style lang="scss">
// #app1 {
// width: 100%;
// width: 1000px;
// }
// body {
// background-image: url(../assets/bj.png);
// background-repeat: no-repeat;
// background-position: top;
// margin: 0;
// overflow: hidden;
/* 隐藏body窗口区域滚动条 */
// }
.bj {
  width: 100%;
  // width: 1690.67px;
  position: fixed;
  top: 0;
  z-index: -100;
  // background:rgba(51,110,198,0.6)
}
.zdy-a {
  background: rgba(51, 110, 198, 0.6);
  color: white;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  div h1 {
    font-size: 48px;
  }
  span{
    font-size: 18px;
  }
  .btn {
    color: #ec4f62;
    font-size: 14px;
    background: #fff;
    padding: 13px 50px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
