import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'

Vue.use(VueRouter)
/*	导出实例化对象一定是  new 对象
	不能像这样
	const router = new VueRouter({
		mode:'history',
		base:__dirname,
		routes
	})
	export default {
		router
	}
	上述做法是错误的

*/
export default new VueRouter({
	mode:'history',
	base:__dirname,
	routes
})
	
