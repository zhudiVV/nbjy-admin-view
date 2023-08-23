
import apiList from '@/api/index.js'


const install = Vue => {
	
	if (install.installed) { return }
	install.installed = true
	
	Object.defineProperties(Vue.prototype, {
	  $api: { // 挂载Vue原型的$api对象上
	    get() {
	      return apiList
	    }
	  }
	})
}

export default {
    install
}
