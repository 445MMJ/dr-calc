<!-- コンポーネントの定義 -->
<script>
export default {
  data() {
    return {
      overCharge: 1,
      overChargeList: [100, 200, 300, 400, 500]
    }
  },
  methods: {
    selectOverCharge(option) {
      this.overCharge = option
      this.$emit('selectOverCharge', this.overCharge)
    },
    selectOverCharge() {
      this.$emit("selectOverCharge", this.overCharge);
    }
  }
}
</script>
 
<!-- テンプレートの定義 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 col-md-2">OverCharge:</div>
      <div class="col-12 col-md-10">
        <select id="option" class="form-select" v-model="overCharge" @change="selectOverCharge">
          <option v-for="option in overChargeList" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>