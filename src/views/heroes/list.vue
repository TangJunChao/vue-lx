<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" :to="{ name: 'heroesadd' }">添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>序列</th>
                    <th>名字</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in heroes" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.gender }}</td>
                        <td>
                            <router-link :to="{name:'heroesedit',params:{id: item.id}}">edit</router-link>
                        &nbsp;&nbsp;
                            <a href="#" @click.prevent="handleClick(item.id)">delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      heroes: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await this.$http.get('http://localhost:3003/heroes');
      this.heroes = res.data.body;
      console.log(res.data);
    },
    async handleClick(id){
      const isConfimed = confirm('确定要删除该英雄？');
      if(!isConfimed) return;
      const resd = await this.$http.delete(`http://localhost:3003/heroes/${id}`);
      if(resd.status===200){
        this.loadData();
        alert('删除成功！');
      }else{
        alert('删除失败！');
      }
    }
  }
};
</script>

<style>

</style>
