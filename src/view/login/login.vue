<template>
    <el-form
        ref="form"
        :model="form"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
    >
        <el-form-item label="帐号" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
<!--            <el-select v-model="form.select" placeholder="请选择活动区域">-->
<!--                <el-option label="区域一" value="shanghai"></el-option>-->
<!--                <el-option label="区域二" value="beijing"></el-option>-->
<!--            </el-select>-->
        </el-form-item>
<!--        <el-form-item  label="活动时间" prop="date" required>-->
<!--            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="即时配送" prop="delivery" required>-->
<!--            <el-switch v-model="form.delivery"></el-switch>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="活动性质" prop="type" required>-->
<!--            <el-checkbox-group v-model="form.type">-->
<!--                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--            </el-checkbox-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="特殊资源" prop="resource" required>-->
<!--            <el-radio-group v-model="form.resource">-->
<!--                <el-radio label="线上品牌商赞助"></el-radio>-->
<!--                <el-radio label="线下场地免费"></el-radio>-->
<!--            </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="活动形式" required>-->
<!--            <el-input type="textarea" v-model="form.desc"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">登陆</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import Http from "@/service/Http";
    export default {
        name: 'login',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                rules: {
                    username:[
                        { required: true, message: '帐号不能为空！', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '密码不能为空！', trigger: 'blur' },
                    ]
                },
                lok: 1
            }
        },
        methods: {
             handleSubmit() {
                 this.$notice({
                      title: '校验结果',
                        message: false ? '请求登录' : '校验失败',
                        duration: 2000
                 })
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        Http.post("/ycl/login", {
                            username: this.form.username,
                            password: this.form.password,
                            isLogin: false
                        }).then(({data}) => {
                            if (data.status) {
                                this.$message({
                                    type: 'danger',
                                    message: "登陆失败"
                                })
                            } else {
                                window.localStorage.setItem("isLogin", true);
                                this.$message({
                                    type: 'success',
                                    message: "登陆成功"
                                });
                                this.$router.push({name: 'page'})
                            }
                        })


                    }
                });
            }
        }
    }
</script>
<style scoped>
.el-form {
    width:500px;
    padding:50px 20px;
    margin: 150px auto;
    border:1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px #ccc;
}
.el-select {
    display: block;
}
.asss {
    display: inline;
}
</style>