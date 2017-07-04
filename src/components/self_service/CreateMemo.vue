<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="text"
          class="form-control"
          v-model="persons"
          placeholder="Persons"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/memo" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
  export default {
    name : 'LogTime',
    data() {
      return {
        date : '',
        persons : '',
        comment : ''
      }
    },
    methods:{
      save() {
        const plan = {
          name : '二哲',
          avatar : 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
          date : this.date,
          persons : this.persons,
          comment : this.comment
        };

        this.$http.post('/api/self_service/create_memo',plan)
          .then((response) => {
            // 响应成功回调
            console.log(response)
            this.$store.dispatch('savePlan', plan)
            this.$router.go(-1)

          })
          .catch((reject) => {
            alert('创建失败');
          });

      }
    }
  }
</script>

<style lang="scss">

</style>
