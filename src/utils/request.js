import axios from 'axios'
console.log('888888222333333444')
console.dir(import.meta.env.VUE_APP_BASE_API)

const ins = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
		headers: {
		    'Content-Type': 'application/json;charset=utf-8',
		  },
    timeout: 3000
})

// 请求拦截
ins.interceptors.request.use(config=>{
    console.log('每次请求前都会执行这里的代码');
		
		// get参数编码
		let url = config.url
		if(config.method.toLowerCase() === 'get')
    return config;
})

// 响应拦截
ins.interceptors.response.use(res=>{
    console.log('每一次响应都会执行这里的代码');
    return res;
})

export default ins