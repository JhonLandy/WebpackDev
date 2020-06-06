import axios from 'axios';
 const Http = new axios.create({
    baseUrl: "/ycl",

});
 //拦截配置以后栽培
export default Http;