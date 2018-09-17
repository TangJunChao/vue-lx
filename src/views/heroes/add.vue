<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" v-model="formData.name" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="sex" placeholder="英雄性别">
          </div>
          <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    async handleAdd(){
      const resh=await axios.post('http://localhost:3003/heroes/', this.formData);
      if(resh.status===201) {
        this.$router.push({
          name: 'heroes'
        });
      }else{
        alert('添加失败！');
      }
    }
  }
};
</script>

<style>

</style>
