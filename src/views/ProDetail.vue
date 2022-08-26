<template>
    <div>
        <!-- 头部页面 -->
        <div>
            <div class="bjt">
                <img src="../assets/prodetail/bj.png" alt="" />
            </div>
            <div class="host">
                <h2>— 巴黎旅游景点 —</h2>
                <p>CITY TOURS / TOUR TICKETS / TOUR GUIDES</p>
            </div>
        </div>

        <!-- 版心卡片 -->
        <div class="cen" id="ss" style="background-color: #f7f7f7;">
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
            <div style="text-align: center;">
                <div class="zdy-kp" style="overflow: hidden">
                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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

                    <div
                        class="card"
                        style="width: 24rem"
                        :class="{ scroll: isScroll }"
                    >
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topNavBg: {
                backgroundColor: "",
            },
            isScroll: "",
        };
    },
    // 滚动监听
    mounted() {
        window.addEventListener("scroll", this.handleScroll); // 监听页面滚动
    },
    methods: {
        // 获取页面滚动距离
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log(scrollTop, "滚动距离");
            if (scrollTop >= 20) {
                console.log("回传成功", scrollTop);
                this.isScroll = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.bjt {
    height: 48rem;
    overflow: hidden;
    position: fixed;
    top: -380px;
    z-index: -100;
    img {
        width: 100vw;
    }
}
.host {
    color: white;
    text-align: center;
    height: 24rem;
    padding-top: 200px;
    background-color: rgba($color: #000000, $alpha: 0.5);
    h2 {
        padding-bottom: 20px;
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
</style>
