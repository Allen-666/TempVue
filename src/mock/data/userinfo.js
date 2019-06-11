import Mock from 'mockjs';
const UsersData = [
    {
      id: 1,
      username: 'Allen',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
      name: '艾伦'
    },
    {
      id: 1,
      username: 'jery',
      password: '1122334',
      avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
      name: '贱贱'
    }
  ];

var data=  Mock.mock({
  "string|1-10": "★"
})

  console.log(data)

//导出多个数据
export { UsersData };