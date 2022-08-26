<template>
    <div class="hhh">
        <div class="header">
            <ul class="zdy-zu">
                <div style="width: 100px; height: 100px"></div>
                <img src="../assets/index/logo.png" alt="" />
                <router-link to="/">
                    <li
                        :class="{ active: isActive === 1 }"
                        @click="changeClass(1)"
                    >
                        首页<span></span></li
                ></router-link>
                <router-link to="/prodetail">
                    <li :class="{ active: isActive === 2 }" @click="changeClass(2)">
                        热门景点<span></span>
                    </li>
                </router-link>
                <li :class="{ active: isActive === 3 }" @click="changeClass(3)">
                    旅游套餐<span></span>
                </li>
                <li :class="{ active: isActive === 4 }" @click="changeClass(4)">
                    关于我们<span></span>
                </li>
                <li :class="{ active: isActive === 5 }" @click="changeClass(5)">
                    客户反馈<span></span>
                </li>
                <li :class="{ active: isActive === 6 }" @click="changeClass(6)">
                    联系我们<span></span>
                </li>
                <li :class="{ active: isActive === 7 }" @click="changeClass(7)">
                    旅游签证<span></span>
                </li>

                    <div v-if="name">
                        <span style="margin-left: 100px;line-height: 46px;color: white;user-select: none">
                            <img src="../assets/denglu.png" alt="">
                            欢迎: {{name}}
                        </span>
                        <span @click="updateUname(null)" style="margin-left: 20px;line-height: 46px;color: white;user-select: none;cursor: pointer;">
                            <img src="../assets/退出.svg" alt="">
                            退出
                        </span>
                    </div>


                    <div class="dl" style="margin-left: 100px;line-height: 46px;"
                        v-if="!name"
                        :class="{ active: isActive === 8 }"
                        @click="changeClass(8)">
                        <router-link to="/login" style="color: white;">
                            <img src="../assets/denglu.png" alt="" /> 登录
                        </router-link>
                    </div>

                    <div class="zc" style="line-height: 46px"
                        v-if="!name"
                        :class="{ active: isActive === 9 }"
                        @click="changeClass(9)">
                        <router-link to="/register" style="color: white;">
                            <img src="../assets/zhuce.png" alt="" /> 注册
                        </router-link>
                    </div>
                <div style="width: 100px; height: 100px">
                    
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['name'])
    },
    data() {
        return {
            isActive: 1,
        };
    },
    methods: {
        ...mapMutations(['updateUname']),
        changeClass(i) {
            console.log(i);
            this.isActive = i;
        },
    },
};
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
        // border: 1px solid transparent;
        position: relative;
        user-select: none;
        cursor: pointer;
        span {
            position: absolute;
            border-bottom: 2px solid #fff;
            left: 50%;
            right: 50%;
            bottom: 0;
        }
        &:hover span {
            transition: all 0.5s linear;
            left: 0;
            right: 0;
        }
        &.active span {
            left: 0;
            right: 0;
            transition: all 0.2s linear;
        }
    }
}
.hhh {
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
</style>
