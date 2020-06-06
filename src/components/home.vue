<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>
    import Header from './header'

    export default {
        name: 'home',
        components: {
            Header
        },
        beforeRouteUpdate(to, from, next) {
            console.log("ss");
            next();
        }
    }
</script>
