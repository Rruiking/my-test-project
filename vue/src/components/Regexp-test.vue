<template>
  <div class="hello">
    <p>这是测试正则表达式</p>
    <input class="input" type="text" placeholder="测试邮箱正则表达式" v-model="inputValue1" />
    <span>{{result1}}</span>
    <button @click="reg1_Click()">验证邮箱</button>
    <br />
    <br>
    <input class="input" type="text" placeholder="测试手机号正则表达式" v-model="inputValue2" />
    <span>{{result2}}</span>
    <button @click="reg2_Click()">验证手机号</button>
    <br>
    <br>
    <input class="input" type="text" placeholder="测试网址正则表达式" v-model="inputValue3" />
    <span>{{result3}}</span>
    <button @click="reg3_Click()">验证网址</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      inputValue1: "",
      inputValue2: "",
      inputValue3:'',
      result1: "",
      result2: "",
      result3:""
    };
  },
  methods: {
    reg1_Click() {
      const text = this.inputValue1;
      const reg = /\w{1,}@\w{1,}.com/;
      this.result1 = reg.test(text);
    },
    reg2_Click() {
      const text = this.inputValue2;
      const reg = /^1[3458]\d{9}$/;
      this.result2 = reg.test(text);
    },
    reg3_Click(){
      const text = this.inputValue3;
      const reg = /https:\/\/www.\w{1,}.com/;
      this.result3 = reg.test(text);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello .input {
  width: 200px;
  height: 20px;
}
span {
  color: red;
}
</style>
