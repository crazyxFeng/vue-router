<template>
  <div id="app">
    <p>路由名字：{{$route.name}}</p>
    <p>路由传参数：{{$route.params}}</p>
    <ul>
      <li><router-link :to="{name:'home',params:{id:123}}">主页</router-link></li>
      <li><router-link to="/news">新闻页</router-link></li>
      <li><router-link to="/regex/11">正则参数匹配</router-link></li>
      <li><router-link to="/ccc/1">ccc</router-link></li>
    </ul>
    <div>
      <!-- 组件群 -->
      <router-view></router-view>
      <router-view name="homeone" style="width:50%;height: 200px;background-color: #ff6600;float: left"></router-view>
      <router-view name="hometwo" style="width:50%;height: 200px;background-color: #fff600;float: left"></router-view>
    </div>
  </div>
</template>

<script>
/*
  路由中传参对应关系 
  1.-->  to="/home"
  2.-->  :to="{'name':'组件别名',params:{id:123,name:'xf'}}"
  3.-->  :to="{'path':'/home/users/user',query:{id:123,name:'xf'}}"
  4.-->   获取参数方式分别是  $route.params.id  $route.params.name
                              $route.query.id   $orute.query.name
*/

</script>

<style>

</style>
