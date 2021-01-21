import axios from 'axios'
const Create = axios.create
const Http = new Create({
    baseUrl: '/ycl'

})
// 拦截配置以后栽培
export default Http
