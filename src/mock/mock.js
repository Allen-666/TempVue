import axios from 'axios'

import MockAdapter from 'axios-mock-adapter';
import {UsersData} from './data/userInfo' 

let mock = new MockAdapter(axios);

mock.onGet('/login').reply(config => {
	// console.log(config)
	// 做一个数据效验
	var data={
				code: 200,
				msg: ''
			};
	
	if(false) {
			data.msg="登陆成功";
			data.code=200;
	}else{
			data.msg="账号或者密码错误";
			data.code=500
	}
	return [200,data];
   
});

export default axios;	
