<template>
    <div>
        <!-- 头部页面 -->
        <div>
            <div class="bjt">
                <img src="../assets/login/login-bj.webp" alt="" />
            </div>
            <div class="zuce">
                <h2>— 登录 —</h2>
                <p>LOGIN</p>
                <dir class="form">
                    <div class="inp">
                        <div>
                            <svg t="1660634971014" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5269" width="32" height="32"><path d="M433.9712 585.147733h156.0576C791.995733 585.147733 955.733333 748.885333 955.733333 950.852267 955.733333 991.266133 922.965333 1024 882.5856 1024H141.4144A73.147733 73.147733 0 0 1 68.266667 950.852267c0-201.966933 163.7376-365.704533 365.704533-365.704534zM512 512c-142.9504 0-258.833067-114.619733-258.833067-256C253.166933 114.619733 369.0496 0 512 0c142.9504 0 258.833067 114.619733 258.833067 256 0 141.380267-115.882667 256-258.833067 256z" p-id="5270" fill="#8a8a8a"></path></svg>
                            <input type="text" placeholder="请输入用户名" v-model="name"/>
                            <span v-if="namezz">*用户名或密码错误</span>
                        </div>
                        <div>
                            <svg t="1660635073054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7173" width="32" height="32"><path d="M780.99456 419.328H376.91904V269.63968c0-49.57696 60.31872-104.74496 134.66112-104.74496 74.368 0 134.7584 55.168 134.7584 104.74496v44.928h0.52736a52.29568 52.29568 0 0 0 51.77344 44.89728c26.4448 0 48.22016-19.5072 51.8656-44.89728h0.59392v-44.92288c0-115.712-107.27936-209.52576-239.5136-209.52576-132.21376 0-239.4624 93.81376-239.4624 209.52576V419.328h-29.95712c-49.55136 0-89.7536 40.20736-89.7536 89.78944v359.2192c0 49.58208 40.20224 89.77408 89.7536 89.77408h538.8288c49.61792 0 89.78432-40.192 89.78432-89.77408v-359.2192c0-49.58208-40.1664-89.78944-89.78432-89.78944z m-224.47616 331.52v40.93952c0 25.71264-20.1216 46.54592-44.93824 46.54592-24.7552 0-44.90752-20.83328-44.90752-46.54592v-40.9344c-35.36384-16.57344-59.88864-52.1728-59.88864-93.42976 0-57.11872 46.96064-103.43424 104.79616-103.43424 57.89696 0 104.79616 46.31552 104.79616 103.43424 0 41.25184-24.46336 76.85632-59.85792 93.42976z" fill="#707070" p-id="7174"></path></svg>
                            <input type="password" placeholder="请输入密码" v-model="pwd"/>
                        </div>
                    </div>
                    <div class="gou">
                        <div>
                            <label>
                                <input type="checkbox" v-model="agree">
                                <span>我确认并同意 <a href="#">《用户手册》</a>和<a href="#">《保密条款》</a></span>
                            </label>
                        </div>
                        <button @click="login" :class="{disabled:!agree}">确认登录</button>
                    </div>
                </dir>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            console.log('点击登录')
            let params = `uname=${this.name}&pwd=${this.pwd}`
            this.axios.post('/login', params).then(res=>{
                console.log('登录结果', res);
                if(res.data.code == 200){
                    alert('登录成功！')
                    this.$router.push('/')
                }else if(res.data.code == 201){
                    this.namezz = true
                }
            })
        }
    },
    data() {
        return {
            agree: false,
            name:'',
            namezz:'',
            pwd:'',
        }
    },
};
</script>

<style lang="scss" scoped>
.bjt {
    // height: 24rem;
    position: fixed;
    overflow: hidden;
    z-index: -100;
    img{
        width: 100vw;
    }
}
.zuce {
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    // height: 23.5rem;
    height: 100vh;
    padding-top: 11rem;
    h2,
    p {
        color: #fff;
    }
}
.form {
    margin: 60px auto;
    border: 1px solid #eee;
    border-radius: 10px;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.9);
    .inp {
        height: 200px;
        padding-top: 40px;
        input {
            margin: 20px;
            background-color: rgba(255, 255, 255, 0);
            outline: none;
            border: 0;
            border-bottom: 1px solid #aaa;
        }
    }
        .gou{
            user-select: none;
            height: 120px;
            button{
                margin-top: 20px;
                width: 200px;
                border: none;
                background-color: #e25a6c;
                color: white;   
                height: 40px;
                border-radius: 20px;
                transition: 0.3s;
                user-select: none;
                &:hover{
                    background-color: rgba(255, 255, 255, 0.1);
                    color: #e25a6c;
                    border: 1px solid #e25a6c;
                }
                &:active{
                    opacity: 0.5;
                }
            }
            .disabled{
                background-color: #ccc;
                pointer-events: none;
            }
            span{
                cursor: pointer;
            }
        }
}
</style>
