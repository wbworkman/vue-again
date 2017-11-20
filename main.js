import Vue from 'vue';
import App from './App.vue';//这里的App先渲染到render方法中然后在渲染到坑里
var vm = new Vue({
    el:'#app',
    // data: function () {//这里的内容就是各个子组件共用的元素所以一般不会写在这里
    //     return {
    //         msg: '组件的变形'
    //     }
    // }
    //利用render方法把需要渲染的组件渲染到坑中
    // render:function (createElement) { //es5的写法
    //     createElement(App);
    // }
    render: createElement => createElement(App)
})
