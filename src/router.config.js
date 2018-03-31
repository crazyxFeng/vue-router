import Home from './components/Home.vue'
import News from './components/News.vue'
import Mypage from './components/Mypage.vue'
import Connectme from './components/Connectme.vue'
import Regex from './components/Regex.vue'
import Error from './components/Error.vue'

/*
	而不能是这样 export default{
		routes:[
			{
				path:'/home',
				name:'home',
				component:Home
			}
		]
	}
*/
//这里导出的是一个数组
export default[
		{
			path:'/home',
			name:'home',
			components:{
				default:Home,
				homeone:Mypage,
				hometwo:Connectme
			},
		},
		{
			path:'/news',
			name:'news',
			component:News,
			children:[
				{path:'mypage',name:'mypage',component:Mypage},
				{path:'connectme/:name',name:'connectme',component:Connectme},
			]
		},
		{
			path:'/regex/:id(\\d+)',
			component:Regex
		},
		{
			path:'*',
			component:Error
		},
		{
			// 利用函数来重定向， return的值就是要跳转的路径
			path:'/ccc/:id',
			redirect:xxx =>{
				const {hash,params,query} =xxx;
				if (params.id == '001') {
					return '/home'
				}else {
					return 'error.html'
				}
			}
		}
]