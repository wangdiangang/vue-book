// 项目中有一个专门用来写 请求的文件；
import axios from "axios";

// axios配置默认的请求路径；
// 路径会默认拼到这个地址的后面；
axios.defaults.baseURL = "http://localhost:3000";

// axios 拦截；
// 当axios数据请求成功之后执行；它可以统一处理数据；
// 每一个请求，都会触发这个中间件中的函数；
axios.interceptors.response.use(function (res) {
  return res.data;
});



// 获取轮播图数据；
export let getSlider = () => {
  // axios默认发送的是异步的请求；
  return axios.get("/sliders");
};


export let getHot = () => {
  return axios.get("/hot")
}


//获取所有图书  列表页
export let getAll = () => {
  return axios.get("/books")
}

export let deleteBook = (id) => {
  return axios.get("/delete?id=" + id)
}
//点击收藏向服务端发送数据
export let collectBook = (data) => {
  return axios.post("/collect", data)
}


// 收藏页
export let getCollect = () => {
  return axios.get("/books?page=collect")
}



//获取详情页
//获取一本书的信息
export let getOne=(id)=>{
  return axios.get("/getOne?id="+id)
}

//确认修改
export let update=(data)=>{

  return axios.post("/update",data)
}

//添加页
//新增图书
export let addBook =(data)=>{
  return axios.post("/add",data);
};








//自己写的   收藏页删除书

export let shanchushoucang=(id)=>{
  return axios.get("/collect?id"+id)
}













