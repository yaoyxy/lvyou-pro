<template>
  <div id="about">
    <div id="map"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    AMapLoader.load({
      key: "6d14e61041506c6bbc611de3df7cdc32", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [
        "AMap.ToolBar",
        "AMap.Scale",
        "AMap.HawkEye",
        "AMap.MapType",
        "AMap.Geolocation",
      ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      this.map = new AMap.Map("map", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 5, //初始化地图级别
        center: [105.602725, 37.076636], //初始化地图中心点位置
      });
      this.map.addControl(new AMap.ToolBar({ position: "LT" }));

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      this.map.addControl(new AMap.Scale());

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      this.map.addControl(new AMap.HawkEye({ isOpen: true }));

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      this.map.addControl(new AMap.MapType());

      // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
      this.map.addControl(
        new AMap.Geolocation({ position: "LB", offset: [15, 60] })
      );
    });
    //DOM初始化完成进行地图初始化
    // this.initMap();
  },
  // methods: {
  //   initMap() {
  //     AMapLoader.load({
  //       key: "6d14e61041506c6bbc611de3df7cdc32", // 申请好的Web端开发者Key，首次调用 load 时必填
  //       version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  //       plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  //     })
  //       .then((AMap) => {
  //         this.map = new AMap.Map("container", {
  //           //设置地图容器id
  //           viewMode: "3D", //是否为3D地图模式
  //           zoom: 5, //初始化地图级别
  //           center: [105.602725, 37.076636], //初始化地图中心点位置
  //         });
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#about {
  padding: 200px;
}
#map {
  background-color: khaki;
  padding: 0px;
  margin: 0px;
  width: 500px;
  height: 500px;
}
</style>
