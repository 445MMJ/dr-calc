<script>
export default {
  props: {
    List: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      servant: ""
    };
  },
  methods: {
    selectServant() {
      this.$emit("selectServant", this.servant);
    }
  },
  computed: {
    dropdownOptions() {
      return this.optionsList.map(item => item.name);
    }
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 col-md-2">サーヴァント:</div>
      <div class="col-12 col-md-10">
        <select id="dropdown" class="form-select" v-model="servant" @change="selectServant">
          <option v-for="item in List" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
