<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="sex" placeholder="">
          </div>
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  data(){
    return{
      formData: {
        name: '',
        gender: ''
      },
      heroId: -1
    };
  },
  mounted(){
  },
  created(){
    this.heroId=this.$route.params.id;
    this.getHeroById();
  },
  methods: {
    async getHeroById(){
      const rese = await this.$http.get(`http://localhost:3003/heroes/${this.heroId}`);
      if(rese.status===200){
        this.formData = rese.data.body;
      }else{
        this.$router.go(-1);
      };
    },
    async handleEdit(){
      const resh = await this.$http.patch(`http://localhost:3003/heroes/${this.heroId}`, this.formData);
      if(resh.status === 200){
        this.$router.push({
          name: 'heroes'
        });
      }else{
        alert('修改失败！');
      };
    }
  }
};
</script>

<style>

</style>
