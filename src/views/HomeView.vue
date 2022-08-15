<template>
    <div id="app1">
        <div style="margin: 0 auto; height: 100vh; overflow: hidden">
            <div class="zdy-a">
                <!-- 首页组件 -->
                <div>
                    <img src="../assets/index/tubiao.png" alt="" />
                    <h1 style="padding: 25px">AFFORDABLE PARIS TOURS</h1>
                    <span>CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
                    <br />
                    <button class="btn1">VIEW TOURS</button>
                </div>
            </div>

            <!-- 背景图片 -->
            <img class="bj" src="../assets/index/bj.png" style="" alt="" />
            <!-- <img
              src="../assets/lunbotu.png"
              style="width: 100%; display: block"
              alt=""
            /> -->
            <!-- 背景视频 -->
            <video
                src="../assets/video/sy.webm"
                style="width: 100%; display: block"
                autoplay
                muted
                loop
            ></video>
        </div>

        <!-- 版心卡片 -->
        <div class="cen">
            <!-- 搜索部分 -->
            <div class="zdy-b">
                <h3>搜索热门旅游景点</h3>
                <div>
                    <input type="text" placeholder="请输入需要搜索的文字" />
                    <div>
                        <img src="../assets/index/sousuo.png" alt="" />
                    </div>
                </div>
            </div>

            <!-- 卡片头部 -->
            <div class="zdy-c">
                <div class="zdy-c-1">巴黎旅游景点</div>
                <div class="zdy-c-2">Quisque at tortor a libero posuer</div>

                <div class="zdy-c-3">
                    <button class="btn">所有景点</button>
                    <button class="btn">第2区</button>
                    <button class="btn">第3区</button>
                    <button class="btn">第5区</button>
                    <button class="btn">第8区</button>
                    <button class="btn">第9区</button>
                </div>
            </div>

            <!-- 首页卡片 -->
            <div style="text-align: center">
                <div class="zdy-kp">
                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-1.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">卢浮宫</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>

                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-2.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">蓬皮杜中心</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>

                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-3.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">塞纳河</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>

                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-4.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">巴黎圣母院</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>

                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-5.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">凯旋门</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>

                    <div class="card" style="width: 24rem">
                        <img
                            src="../assets/index/kp-6.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body text-center">
                            <p class="card-text">圣心大教堂</p>
                            <p>客户评分: ★★★★★</p>
                        </div>
                    </div>
                </div>
                <button
                    class="zdy-btn"
                    style="width: 200px; height: 45px; margin: 50px 50px 80px"
                >
                    MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
                </button>
            </div>
        </div>

        <!-- 透明背景模块 -->
        <div class="zdy-tm">
            <div>
                <h3>为您开启一段愉快的旅程</h3>
                <p>CITY TOURS / TOUR TICKETS / TOUR GUIDES</p>
            </div>
        </div>
        <div style="height: 800px; background: white">
            <div>
                <div></div>
                <div>
                    <el-steps :active="1">
                        <el-step title="步骤 1" icon="el-icon-edit"
                            >12313</el-step
                        >
                        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                        <el-step
                            title="步骤 3"
                            icon="el-icon-picture"
                        ></el-step>
                    </el-steps>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data () {
		return {
			topNavBg: {
        		backgroundColor: ''
      		}
		}
	},
	// 滚动监听
	mounted () {
    	window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
    },
    methods: {
		// 获取页面滚动距离
	    handleScroll () {
	        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	        console.log(scrollTop, '滚动距离')
            if(scrollTop == 600){
                
            }
	    }
	},

	// 滚动重置
    	beforeDestroy () {
      		window.removeEventListener('scroll', this.handleScroll)
    	},
}


</script>

<style lang="scss">
// 背景图
.bj {
    width: 100%;
    // width: 1690.67px;
    position: fixed;
    top: 0;
    z-index: -100;
    // background:rgba(51,110,198,0.6)
}
// 首页图片
.zdy-a {
    background: rgba(51, 110, 198, 0.5);
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
    span {
        font-size: 18px;
    }
    .btn1 {
        color: #ec4f62;
        font-size: 14px;
        background: #fff;
        padding: 8px 50px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
            background-color: #e2e2e2;
        }
        &:active {
            opacity: 0.8;
        }
    }
}

// 版心卡片
.cen {
    width: 100%;
    background-color: #f7f7f7;
}
// 搜索框
.zdy-b {
    width: 1200px;
    margin: 0 auto;
    height: 200px;
    // background: #f7f7f7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3 {
        color: #696969;
        font-weight: 900;
    }
    div {
        display: flex;
        input {
            line-height: 40px;
            width: 300px;
            padding-left: 10px;
            border: 1px solid #e5e5e5;
            outline: none;
        }
        div {
            width: 40px;
            height: 42px;
            img {
                background-color: #dbdbdb;
                padding: 10px 8px;
            }
        }
    }
}

// 卡片
.zdy-c {
    background-color: #f7f7f7;
    // background-color: pink;
    // height: 150px;
    text-align: center;
    color: #595959;
    .zdy-c-1 {
        font-size: 25px;
        padding-top: 50px;
        margin-bottom: 20px;
    }
    .zdy-c-2 {
        margin-bottom: 30px;
    }
    .zdy-c-3 {
        margin: 0 auto 30px;
        .btn {
            border: 1px solid #cecece;
            line-height: 25px;
            border-radius: 3px;
            padding: 5px 35px;
            font-size: 14px;
            color: #8e8e8e;
            margin: 0 3px;
            &:hover {
                background-color: #fff;
                border: 1px solid red;
                color: red;
            }
            &:active {
                opacity: 0.5;
            }
        }
    }
}

// 卡片
.zdy-kp {
    width: 80rem;
    margin: 0 auto;
    background: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
        flex-direction: column;
        margin: 0 20px 20px 20px;
    }
}

// 跳转按钮
.zdy-btn {
    background-color: #e7596b;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 80px;
    &:hover {
        background-color: #fff;
        color: #e7596b;
        border: 1px solid #e7596b;
    }
    &:active {
        opacity: 0.5;
    }
}

// 透明模块
.zdy-tm {
    height: 400px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        text-align: center;
        h3 {
            font-weight: 900;
        }
    }
}
</style>
