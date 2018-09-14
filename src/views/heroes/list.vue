<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
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
                            <router-link :to="'/heroes/edit/'+item.id">edit</router-link>
                        &nbsp;&nbsp;
                            <a href="javascript:window.confirm('Are you sure?')">delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
      const res = await axios.get('http://localhost:3003/heroes');
      this.heroes = res.data.body;
      console.log(res.data);
    }
  }
};
</script>

<style>

</style>
