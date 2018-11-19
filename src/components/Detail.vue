<template>
  <div>
    <Myheader :back="true">
      详情页
    </Myheader>
    <div class="content container">
      <ul>
        <li>
          <label>书的名称</label>
          <input type="text" v-model="book.bookName">
        </li>
        <li>
          <label>书的信息</label>
          <input type="text" v-model="book.bookInfo">
        </li>
        <li>
          <label>书的价格</label>
          <input type="text" v-model="book.bookPrice">
        </li>

      </ul>
      <button @click="updateBook(book)">确认修改</button>
    </div>
  </div>
</template>
<script>
  // 默认导出一个对象
  import Myheader from "../base/Myheader.vue"
  import {getOne, update} from "../api/index.js"

  export default {
    data() {
      return {
        book: {}
      }
    },
    created() {
      let id = this.$route.params.id;//获取当前路由的id
      this.getBook(id)
    },
    methods: {
      async getBook(id) {
        this.book = await getOne(id)
      },
      async updateBook(book) {
        //更新数据之后调回上一个页面
        await update(book)//由于跳转比较快，后端数据还没有成功被修改，所有在列表页的数据还是之前的数据

        this.$router.go(-1)
      }
    },
    components: {Myheader},
    computed: {}
  }
</script>
<style scoped>
  .container {
    width: 100%;
    padding: 20px;
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: white;
    z-index: 101;
  }

  .container li {
    height: 100px;
  }

  .container li label {
    display: block;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .container li input {
    display: block;
    width: 300px;
    height: 40px;
    padding-left: 10px;
    margin-left: 5px;
  }

  .container button {
    width: 100px;
    height: 40px;
    display: block;
    text-align: center;
    line-height: 40px;
    background: red;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: none

  }
</style>
