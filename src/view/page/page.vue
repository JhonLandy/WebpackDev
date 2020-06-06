<template>
    <el-container>
        <el-header height="auto">
            <el-carousel
                    indicator-position="inside"
                    height="400px"
            >
                <el-carousel-item v-for="item in images" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </el-header>
        <el-main>
            <div ref="waterfall" class="waterfull">
                <el-row :gutter="20">
                    <Tab v-for="item in works" :work="item" :key="item.name"/>
                </el-row>
                <div class="waterfall-loading" ref='loading' v-show="isLoading">
                    拼命加载中
                    <i class="el-icon-loading"></i>
                </div>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    import Tab from '../../components/tab'
    import Http from "../../service/Http";
    import {throttle} from 'throttle-debounce'
    const arrUrl = [
        require('@/image/1.jpg'),
        require('@/image/2.jpg'),
        require('@/image/3.jpg'),
        require('@/image/4.jpg')
    ]
    export default {
        name: 'page',
        data() {
            return {
                images:[...arrUrl],
                works:[],
                isLoading:false,
                page: 1
            }
        },
        watch: {
            $route: {
                handler() {
                    Http.post(`/ycl/lecturer/lists?page=${this.page}&rows=8`).then(({data}) => {
                        this.works = data;
                    })
                },
                immediate: true
            }
        },
        mounted() {
           let scrollEvent = () => {
                if(this.$refs.waterfall.getBoundingClientRect().bottom + 19  < document.documentElement.clientHeight) {
                    this.isLoading = true;
                    this.page++;
                    Http.post(`/ycl/lecturer/lists?page=${this.page}&rows=8`).then(({data}) => {
                        this.works.push(...data);
                    })
                } else {
                    this.isLoading = false;
                }
            }
            this.scroll = throttle(300, scrollEvent);
            window.addEventListener("scroll", this.scroll)
        },
        destroyed() {
            window.removeEventListener("scroll", this.scroll);
        },
        components: {
            Tab
        }
    }
</script>
<style>
.waterfall-loading{
    padding:10px 0;
    text-align: center;
    color: #1E9FFF;
}
</style>