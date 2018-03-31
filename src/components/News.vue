<template>
	<div id="news">
		<h1>我是新闻页</h1>
		<ol>
			<li><router-link :to="{'name':'mypage',params:{id:123,name:'熊峰'}}">我的主页</router-link></li>
			<li><router-link to="/news/connectme/xf">联系我</router-link></li>
		</ol>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>