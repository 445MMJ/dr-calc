<script>
export default {
  data() {
    return {
      enemyDeathRate: null,
      enemyDeathRateList: ["100", "80", "50", "20", "5"]
    };
  },
  methods: {
    selectEnemyDeathRate() {
      this.$emit("selectEnemyDeathRate", this.enemyDeathRate);
    }
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 col-md-2">DeathRate:</div>
      <div class="col-12 col-md-10">
        <select id="option" class="form-select" v-model="enemyDeathRate" @change="selectEnemyDeathRate">
          <option v-for="option in enemyDeathRateList" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
