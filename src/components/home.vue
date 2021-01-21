<template>
    <div>
        <Header />
        <router-view />
    </div>
</template>
<script>
import Header from './header'

export default {
    name: 'Home',
    components: {
        Header
    },
    beforeRouteUpdate(to, from, next) {
        console.log('ss')
        next()
    }
}
</script>
