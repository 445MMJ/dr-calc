<!-- コンポーネントの定義 -->
<script>
export default {
  data() {
    return {
      range: "AoE"
    }
  },
  methods: {
    selectRange(option) {
      this.range = option
      this.$emit('selectRangeResponse', this.range)
    }
  }
}
</script>
 
<!-- テンプレートの定義 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-outline-primary col-12" @click="selectRange('AoE')"> 全体 </button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-outline-primary col-12" @click="selectRange('Single')"> 単体 </button>
      </div>
    </div>
  </div>
</template>