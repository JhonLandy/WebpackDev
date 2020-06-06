<template>
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">
            <router-link :to="{name: 'page'}">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link :to="{name: 'table'}">表格</router-link>
        </el-menu-item>
        <el-menu-item index="3" style="float: right" v-show="userInfo.username">
            <router-link :to="{name:'login'}">{{userInfo.username}}</router-link>
            <a href="javascript:;" @click="logout">退出</a>
        </el-menu-item>
        <el-menu-item index="3" style="float: right" v-show="!userInfo.username">
            <router-link :to="{name:'login'}">登陆</router-link>
            <router-link :to="{name:'register'}">注册</router-link>
        </el-menu-item>
    </el-menu>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        watch: {
            $route: {
                handler() {
                    console.log(this.$store.state.userInfo);
                },
                immediate: true
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo
            },
            isLogin() {
                return this.$store.state.isLogin
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            logout() {
                this.$store.commit("changeUser", {});
                window.localStorage.removeItem("isLogin");
            }
        }
    }
</script>