<template>
    <div>
        <!-- 头部页面 -->
        <div>
            <div class="bjt">
                <img src="../assets/login/login-bj.webp" alt="" />
            </div>
            <div class="zuce">
                <h2>— 注册 —</h2>
                <p>REGISTERED</p>
                <dir class="form">
                    <div class="inp">
                        <div>
                            <svg t="1660634971014" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5269" width="32" height="32"><path d="M433.9712 585.147733h156.0576C791.995733 585.147733 955.733333 748.885333 955.733333 950.852267 955.733333 991.266133 922.965333 1024 882.5856 1024H141.4144A73.147733 73.147733 0 0 1 68.266667 950.852267c0-201.966933 163.7376-365.704533 365.704533-365.704534zM512 512c-142.9504 0-258.833067-114.619733-258.833067-256C253.166933 114.619733 369.0496 0 512 0c142.9504 0 258.833067 114.619733 258.833067 256 0 141.380267-115.882667 256-258.833067 256z" p-id="5270" fill="#8a8a8a"></path></svg>
                            <input @blur="checkName" type="text" placeholder="请输入用户名" v-model="name" />
                            <span v-if="namestyle" >
                                <span v-if="namezz" style="color: red;font-size:12px" class="chenggong"><svg t="1660654792092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2868" width="16" height="16"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m259.66 369.85L481.12 682.38c-13.87 13.87-36.36 13.87-50.23 0L252.34 503.83c-13.87-13.87-13.87-36.36 0-50.23 13.87-13.87 36.36-13.87 50.23 0l153.44 153.44 265.42-265.42c13.87-13.87 36.36-13.87 50.23 0 13.87 13.87 13.87 36.36 0 50.23z" p-id="2869" fill="#d81e06"></path></svg> 用户名可用</span>
                                <span v-else class="shibai">* 用户名已存在或格式错误</span>
                            </span>
                        </div>
                        <div>
                            <svg t="1660635131111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9085" width="32" height="32"><path d="M1021.407 146.857L512.645 574.783 3.909 146.857zM0.007 183.402L339.886 471.24 0.007 876.743z" p-id="9086" fill="#707070"></path><path d="M39.354 877.144L363.529 494.4 512.54 616.772l149.274-126.179 324.157 386.551zM1023.993 876.743L684.122 471.24l339.871-287.838z" p-id="9087" fill="#707070"></path></svg>
                            <input @blur="checkEmail" type="text" placeholder="请输入邮箱" v-model="email" />
                            <span v-if="emailstyle">
                                <span v-if="this.emailzz" class="chenggong" style="color: red;font-size:12px"><svg t="1660654792092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2868" width="16" height="16"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m259.66 369.85L481.12 682.38c-13.87 13.87-36.36 13.87-50.23 0L252.34 503.83c-13.87-13.87-13.87-36.36 0-50.23 13.87-13.87 36.36-13.87 50.23 0l153.44 153.44 265.42-265.42c13.87-13.87 36.36-13.87 50.23 0 13.87 13.87 13.87 36.36 0 50.23z" p-id="2869" fill="#d81e06"></path></svg> 邮箱可用</span>
                                <span v-else class="shibai">* 邮箱已存在或格式错误</span>
                            </span>
                        </div>
                        <div>
                            <svg t="1660635073054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7173" width="32" height="32"><path d="M780.99456 419.328H376.91904V269.63968c0-49.57696 60.31872-104.74496 134.66112-104.74496 74.368 0 134.7584 55.168 134.7584 104.74496v44.928h0.52736a52.29568 52.29568 0 0 0 51.77344 44.89728c26.4448 0 48.22016-19.5072 51.8656-44.89728h0.59392v-44.92288c0-115.712-107.27936-209.52576-239.5136-209.52576-132.21376 0-239.4624 93.81376-239.4624 209.52576V419.328h-29.95712c-49.55136 0-89.7536 40.20736-89.7536 89.78944v359.2192c0 49.58208 40.20224 89.77408 89.7536 89.77408h538.8288c49.61792 0 89.78432-40.192 89.78432-89.77408v-359.2192c0-49.58208-40.1664-89.78944-89.78432-89.78944z m-224.47616 331.52v40.93952c0 25.71264-20.1216 46.54592-44.93824 46.54592-24.7552 0-44.90752-20.83328-44.90752-46.54592v-40.9344c-35.36384-16.57344-59.88864-52.1728-59.88864-93.42976 0-57.11872 46.96064-103.43424 104.79616-103.43424 57.89696 0 104.79616 46.31552 104.79616 103.43424 0 41.25184-24.46336 76.85632-59.85792 93.42976z" fill="#707070" p-id="7174"></path></svg>
                            <input @blur="checkPwd" type="password" placeholder="请输入密码" v-model="pwd" />
                            <span v-if="pwdstyle">
                                <span v-if="this.pwdzz" class="chenggong" style="color: red;font-size:12px"><svg t="1660654792092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2868" width="16" height="16"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m259.66 369.85L481.12 682.38c-13.87 13.87-36.36 13.87-50.23 0L252.34 503.83c-13.87-13.87-13.87-36.36 0-50.23 13.87-13.87 36.36-13.87 50.23 0l153.44 153.44 265.42-265.42c13.87-13.87 36.36-13.87 50.23 0 13.87 13.87 13.87 36.36 0 50.23z" p-id="2869" fill="#d81e06"></path></svg> 密码可用</span>
                                <span v-else class="shibai">* 密码格式错误</span>
                            </span>
                        </div>
                        <div>
                            <svg t="1660635073054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7173" width="32" height="32"><path d="M780.99456 419.328H376.91904V269.63968c0-49.57696 60.31872-104.74496 134.66112-104.74496 74.368 0 134.7584 55.168 134.7584 104.74496v44.928h0.52736a52.29568 52.29568 0 0 0 51.77344 44.89728c26.4448 0 48.22016-19.5072 51.8656-44.89728h0.59392v-44.92288c0-115.712-107.27936-209.52576-239.5136-209.52576-132.21376 0-239.4624 93.81376-239.4624 209.52576V419.328h-29.95712c-49.55136 0-89.7536 40.20736-89.7536 89.78944v359.2192c0 49.58208 40.20224 89.77408 89.7536 89.77408h538.8288c49.61792 0 89.78432-40.192 89.78432-89.77408v-359.2192c0-49.58208-40.1664-89.78944-89.78432-89.78944z m-224.47616 331.52v40.93952c0 25.71264-20.1216 46.54592-44.93824 46.54592-24.7552 0-44.90752-20.83328-44.90752-46.54592v-40.9344c-35.36384-16.57344-59.88864-52.1728-59.88864-93.42976 0-57.11872 46.96064-103.43424 104.79616-103.43424 57.89696 0 104.79616 46.31552 104.79616 103.43424 0 41.25184-24.46336 76.85632-59.85792 93.42976z" fill="#707070" p-id="7174"></path></svg>
                            <input @blur="checkRepwd" type="password" placeholder="请确认密码" v-model="repwd"/>
                            <span v-if="repwdStyle">
                                <span v-if="this.repwdzz" class="chenggong" style="color: red;font-size:12px"><svg t="1660654792092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2868" width="16" height="16"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m259.66 369.85L481.12 682.38c-13.87 13.87-36.36 13.87-50.23 0L252.34 503.83c-13.87-13.87-13.87-36.36 0-50.23 13.87-13.87 36.36-13.87 50.23 0l153.44 153.44 265.42-265.42c13.87-13.87 36.36-13.87 50.23 0 13.87 13.87 13.87 36.36 0 50.23z" p-id="2869" fill="#d81e06"></path></svg> 密码一致</span>
                                <span v-else class="shibai">* 密码不一致</span>
                            </span>
                        </div>
                    </div>
                    <div class="gou">
                        <div>
                            <label>
                                <input type="checkbox" v-model="agree">
                                <span>我已阅读并同意用户注册协议</span><a href="#">《用户注册协议》</a>
                            </label>
                        </div>
                        <button @click="checkForm" :class="{disabled:!agree}">确认注册</button>
                    </div>
                </dir>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            namestyle:'',
            namezz:'',
            nameyz:'',

            email:'',
            emailstyle: '',
            emailzz: '',
            emailyz:'',

            pwd: "",
            pwdstyle: '',
            pwdzz: '',

            repwd: "",
            repwdStyle:'',
            repwdzz:'',
            agree: false,
            count:0

        };
    },
    methods: {
        // 执行注册
        checkForm(){
            if(this.nameyz && this.emailyz && this.checkPwd() && this.checkRepwd() ){
                console.log("验证通过,执行注册")
                // 发送http请求, 执行注册业务
                let params = `uname=${this.name}&pwd=${this.pwd}&email=${this.email}`
                this.axios.post('/register', params).then(res=>{
                console.log('注册结果: ', res)
                alert('注册成功! 即将为您跳转登入页面')
                this.$router.push('/login')
                })
            }else{
                console.log('验证不正确')
            }
        },
        
        // 确认密码验证
        checkRepwd(){
            let exp = /^\d{6}$/;
            if(exp.test(this.repwd) && this.pwd == this.repwd){
                this.repwdStyle = true
                this.repwdzz = true
                // console.log('确认密码')
                return true
            }
            else{
                this.repwdStyle = true
                this.repwdzz = false
                return false
            }
        },
        
        
        // 密码验证
        checkPwd() {
            let exp = /^\d{6}$/;
            if (exp.test(this.pwd)) {
                this.pwdstyle = true
                this.pwdzz = true;
                // console.log('密码');
                return true
            } else {
                this.pwdstyle = true
                this.pwdzz = false;
                return false
            }
        },
        
        
        // 邮箱验证
        checkEmail(){
            let exp = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
            if(exp.test(this.email)){
                this.emailstyle=true

                let params = `email=${this.email}`
                this.axios.post('/email', params).then(res=>{
                    // console.log('邮箱:',res);
                    if(res.data.code == 200){
                        // console.log('邮箱可用');
                        this.emailzz= true
                        // console.log('邮箱true');
                        this.emailyz = true
                    }else{
                        // console.log('邮箱已存在')
                        this.emailzz= false
                        this.emailyz = false
                    }
                })
            }else{
                this.emailstyle=true
                this.emailzz = false
                return false
            }
        },
        
        // 用户名验证
        checkName() {
            let exp = /^\w{3,10}$/;
            // console.log(this.count++);
            if(exp.test(this.name)){
                this.namestyle=true

                let params = `uname=${this.name}`
                this.axios.post('/uname', params).then(res=>{
                    // console.log('用户名:',res);
                    if(res.data.code == 200){
                        this.namezz= true
                        // console.log('用户名可用true');
                        this.nameyz = true
                    }else{
                        // console.log('用户名已存在')
                        this.namezz= false
                        this.nameyz = false
                    }
                })
            }else{
                this.namestyle = true
                this.namezz= false
                return false
            }
        }
    }
}
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
        height: 320px;
        padding-top: 40px;
        div{
            position: relative;
            .shibai{
                font-size:12px;
                position: absolute;
                color:red;
                top: 20px;
                // display: none;
            }
            .chenggong{
                position: absolute;
                top: 20px;
                // display: none;
            }
        input {
            padding-left: 10px;
            margin: 20px;
            background-color: rgba(255, 255, 255, 0);
            outline: none;
            border: 0;
            border-bottom: 1px solid #aaa;
        }
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