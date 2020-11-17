import Vue from 'vue'

// 实现一个create方法，能够创建指定组件实例
// 并将其挂载至body上
// Component是组件配置对象
export default function create(Component, props) {
    // 怎么创建组件实例
    // 方案1：可以通过Vue.extend(Component)获取组件构造函数
    // const Ctor = Vue.extend(Component)
    // const comp = new Ctor()

    // 方案2：借鸡生蛋，借助Vue构造组件实例
    // const vm = new Vue({
    //   render(h) {
    //     // h是createElement函数，可以返回vdom
    //     return h(Component, {props})
    //   }
    // }).$mount() // $mount()目标：将vdom=》dom
    const Ctor = Vue.extend({
        render: h => h(Component, { props })
    })
    const vm = new Ctor().$mount()
    console.log(vm)
    // 手动追加dom
    document.body.appendChild(vm.$el)
    console.log(vm.$el)

    // 淘汰逻辑
    vm.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    return vm
}
