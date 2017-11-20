<template>
  <div>
      <h3>组件的变形即分离</h3>

      <Son yy='1' :aa='msg'></Son>
  </div>
</template>
<script>
import Son from './Son.vue';
export default {
  data : function () {
    return {
      msg: '给son的数据'
    }
  },
  components: {//这里声明一下子组件
    Son  
  }
}
</script>
<style>
  h3 {
    color: red;
  }
</style>
