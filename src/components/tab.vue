<template>
    <el-col :span="6">
        <div class="card">
                <img class="imgTab" :src="work.url">
                <el-footer style="text-align:center;line-height: 60px">{{work.name}}</el-footer>
        </div>
    </el-col>
</template>
<script>
    export default {
        name: 'tab',
        props:{
            work: {
                type: Object,
                default: ()=> {}
            }
        }
    }
</script>
<style scoped>
.card {
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
}
.imgTab {
    width:100%;
    height:80%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
}
.el-col {
    margin-top:15px
}
</style>