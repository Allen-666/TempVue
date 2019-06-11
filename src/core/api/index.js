import request from "./http"
class Apls{
	joke(data){
		return request({
			method:"get",
			url:"/joke",
			params:data
		})
	}
}
export default new Apls();