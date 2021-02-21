<template>
  <div class="shadow w-75 ml-auto mr-auto mt-5 rounded p-5">
      <h4 class="text-center mb-5">Получение Contribution Map</h4>
      <div class="form-row">
          <label>Имя пользователя Github</label>
          <input type="text" v-model="userName" class="form-control" />
      </div>

    <div class="modal-footer">
          <button class="btn btn-primary" @click="getData">Получить</button>
      </div>
    <pre  v-if="resultText !== ''" class=" text-left small alert alert-success">{{resultText}}</pre>
    <div v-if="errorText !== ''" class="alert alert-danger">{{resultText}}</div>

  </div>
</template>

<script>
export default {
name: "ContributionMap",
  data() {
    return {
      userName: 'andrew',
      resultText: '',
      errorText: ''
    }
  },
  methods: {
    async getData() {
      this.resultText = '';
      this.errorText = '';
      console.log('1');

      this.axios.get(  '/api/' + this.userName)
        .then( (resp) => {
          this.resultText = JSON.stringify(resp.data, null, 4);
        })
        .catch( err => {
          this.errorText = err;
        });
    }
  }
}
</script>

<style scoped>

</style>
