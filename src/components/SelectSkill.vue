<script>
export default {
    props: {
        skillList: {
            type: Array,
            required: true
        },
        checkedSkillList: {
            type: Array,
            required: false
        },
        text: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            checkedItems: [],
        }
    },
    methods: {
        selectSkill() {
            this.$emit("selectSkill", this.checkedItems);
        }
    },
    watch: {
        checkedSkillList(newVal) {
            this.checkedItems = newVal;
        }
    },
};
</script>

<template>
    <div class="col-10 col-sm-6 col-md-4 mb-3 ">
        <div class="text-bg-secondary rounded">{{ text }}</div>
        <div class="form-check form-switch" v-for="(item, index) in skillList" :key="index">
            <input :id="'input-' + item.user + index" class="form-check-input" type="checkbox" :value="item" v-model="checkedItems" @change="selectSkill" />
            <label :for="'input-' + item.user + index" class="form-check-label">{{ item.skillname }}-{{ item.user }}</label>
        </div>

    </div>
</template>