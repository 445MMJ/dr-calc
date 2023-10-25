<!-- コンポーネントの定義 -->
<script >
import SelectRange from './components/SelectRange.vue'
import SelectOverCharge from './components/SelectOverCharge.vue'
import SelectEnemyDaethRate from "./components/SelectEnemyDaethRate.vue";
import SelectServant from './components/SelectServant.vue'
import SelectSkill from './components/SelectSkill.vue'
const datadayo = "おげえええええええ"

export default {
  components: {
    SelectRange,
    SelectOverCharge,
    SelectEnemyDaethRate,
    SelectServant,
    SelectSkill,
  },
  data() {
    return {
      range: "AoE",
      selectedServant: 'へべれけ荊軻',
      selectedServantData: [{ name: 'へべれけ荊軻', range: 'AoE', overcharge: [300, 400, 500, 600, 700] }],
      overCharge: 100,
      NPValue: 0,
      enemyDeathRate: "100",
      //鯖リスト
      servantList: [
        { name: '両儀式(剣)', range: 'AoE', overcharge: [60, 70, 80, 90, 100] },
        { name: '両儀式(殺)', range: 'Single', overcharge: [100, 110, 120, 130, 140] },
        { name: 'ニトクリス(術)', range: 'AoE', overcharge: [50, 62.5, 75, 87.5, 100] },
        { name: '荊軻', range: 'Single', overcharge: [50, 62.5, 75, 87.5, 100] },
        { name: '静謐のハサン', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: '山の翁', range: 'Single', overcharge: [100, 125, 150, 175, 200] },
        { name: 'ニトクリス(殺)', range: 'AoE', overcharge: [30, 40, 50, 60, 70] },
        { name: '殺生院キアラ(月)', range: 'AoE', overcharge: [100, 112.5, 125, 137.5, 150] },
        { name: 'シャルロット・コルデー', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: '宇津見エリセ', range: 'AoE', overcharge: [30, 40, 50, 60, 70] },
        { name: '新宿のアヴェンジャー', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: '蘆屋道満', range: 'AoE', overcharge: [120, 120, 120, 120, 120] },
        { name: 'ディルムッド・オディナ(剣)', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: 'ワルキューレ(対[魔性]限定)', range: 'AoE', overcharge: [50, 62.5, 75, 87.5, 100] },
        { name: '神槍 李書文', range: 'Single', overcharge: [40, 50, 60, 70, 80] },
        { name: 'アルジュナ', range: 'AoE', overcharge: [50, 50, 50, 50, 50] },
        { name: 'アルジュナ(対[神性]限定)', range: 'AoE', overcharge: [80, 80, 80, 80, 80] },
        { name: 'スカサハ', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: 'シャルル＝アンリ・サンソン', range: 'Single', overcharge: [30, 42.5, 55, 67.5, 80] },
        { name: 'ステンノ様(対[男性]限定)', range: 'Single', overcharge: [100, 125, 137.5, 143.8, 150] },
        { name: '呪腕のハサン', range: 'Single', overcharge: [80, 90, 100, 110, 120] },
        { name: 'クー・フーリン(プロト) ', range: 'Single', overcharge: [50, 62.5, 75, 87.5, 100] },
        { name: 'クー・フーリン', range: 'Single', overcharge: [60, 70, 80, 90, 100] },
        { name: '李書文(殺)', range: 'Single', overcharge: [150, 150, 150, 150, 150] },
        { name: 'スカサハ(殺)', range: 'AoE', overcharge: [30, 40, 50, 60, 70] },
        { name: '宇津見エリセ(讐)', range: 'Single', overcharge: [80, 80, 80, 80, 80] },
        { name: '水着ワルキューレ(対[魔性]限定)', range: 'AoE', overcharge: [30, 30, 30, 30, 30] },
        { name: 'ニトクリス(讐)(通常)', range: 'AoE', overcharge: [50, 50, 50, 50, 50] },
        { name: 'ニトクリス(讐)(対[悪])', range: 'AoE', overcharge: [100, 100, 100, 100, 100] },
        { name: 'ラスプーチン(対[善])', range: 'AoE', overcharge: [60, 60, 60, 60, 60] },
      ],
      //全体の即死耐性をダウン
      supportSkillAll: [
        { skillname: "明星", value: 100, user: "両儀式(剣)" },
        { skillname: "晩鐘、帰路", value: 200, user: "“山の翁”" }
      ],
      //単体の即死耐性をダウン(
      supportSkillSingle: [
        { skillname: "直死の魔眼", value: 100, user: "両儀式(殺)" },
        { skillname: "死を纏う者", value: 50, user: "新宿のアヴェンジャー" },
        { skillname: "境界を視る", value: 50, user: "総耶高校学生服" }
      ],
      //即死付与成功率をアップ
      buffSkill: [
        { skillname: '青ざめた死の舞踏', value: 50, user: '静謐のハサン' },
        { skillname: '死神', value: 100, user: '宇津見エリセ' },
        { skillname: '冥府神の御業', value: 100, user: 'ニトクリス(術)' },
        { skillname: '暗殺の天使', value: 100, user: 'シャルロット・コルデー' },
        { skillname: '死神', value: 120, user: '宇津見エリセ(讐)' },
        { skillname: '暗黒の神核', value: 30, user: '蘆屋道満' },
      ],
      selectedSkill: [],
      selectedSkillAll: [],
      selectedSkillSingle: [],
      selectedSkillSelf: [],
      selectedSkillAllValue: 0,
      selectedSkillSingleValue: 0,
      selectedSkillSelfValue: 0,
      show: false,
    }
  },
  methods: {
    updateSelectRange(option) {
      this.range = option
    },
    updateSelectOverCharge(option) {
      this.overCharge = option
    },
    updateEnemyDeathRate(option) {
      this.enemyDeathRate = option
    },
    updateSelectServant(option) {
      this.selectedServant = option;
      this.selectedServantData = this.servantList.filter(item => item.name === option);
      this.selectedSkillSelf = this.filteredSkillList
      this.selectedSkillSelfValue = this.selectedSkillSelf.reduce((total, item) => total + (item.value), 0);
    },
    updateSelectSkillAll(option) {
      this.selectedSkillAll = option
      this.selectedSkillAllValue = this.selectedSkillAll.reduce((total, item) => total + (item.value), 0);
    },
    updateSelectSkillSingle(option) {
      this.selectedSkillSingle = option
      this.selectedSkillSingleValue = this.selectedSkillSingle.reduce((total, item) => total + (item.value), 0);
    },
    updateSelectSkillSelf(option) {
      this.selectedSkillSelf = option
      this.selectedSkillSelfValue = this.selectedSkillSelf.reduce((total, item) => total + (item.value), 0);
    },
    toggle() {
      this.show = !this.show
    }
  },
  computed: {
    filteredServantList() {
      return this.servantList
        .filter(item => item.range === this.range)
        .map(item => item.name);
    },
    filteredSkillList() {
      this.selectedSkillSelf = []
      return this.buffSkill
        .filter(item => item.user === this.selectedServant)
    },
    computedResult() {
      this.NPValue = this.selectedServantData[0].overcharge[(this.overCharge / 100 - 1)]
      const temp = (100 + this.selectedSkillAllValue + this.selectedSkillSingleValue + this.selectedSkillSelfValue)
      return temp * this.enemyDeathRate * this.NPValue / 10000;
    },
  },
}

</script>
 
<!-- テンプレートの定義 -->
<template>
  <header class="bg-primary text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand material-symbols-outlined">skull 即死確率計算機</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link btn btn-outline-info" href="https://445mmj.github.io/system-calc/">システム計算機</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-outline-info" href="https://445mmj.github.io/SupportTrim/">サポート画像作成</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-outline-info" href="https://github.com/445MMJ/dr-calc">中身</a>
            </li>
            <li class="nav-item">
              <a @click="toggle" class="nav-link btn btn-outline-info" href="#">動作確認</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <br>
  <SelectRange @selectRangeResponse="updateSelectRange" /><br>
  <SelectServant @selectServant="updateSelectServant" :List="filteredServantList" /><br>
  <SelectOverCharge @selectOverCharge="updateSelectOverCharge" /><br>
  <SelectEnemyDaethRate @selectEnemyDeathRate="updateEnemyDeathRate" /><br>
  <div class="row justify-content-around">
  <SelectSkill @selectSkill="updateSelectSkillAll" :skillList="supportSkillAll" text="全体サポ" /><br>
  <SelectSkill @selectSkill="updateSelectSkillSingle" :skillList="supportSkillSingle" text="単体サポ" /><br>
  <SelectSkill @selectSkill="updateSelectSkillSelf" :skillList="filteredSkillList" text="自己バフ"
    :checkedSkillList="filteredSkillList" /><br>
  </div>

  <div class="fixed-bottom text-center container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 text-center display-3">結果 {{ computedResult }} %</div>
    </div>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>


    
  
  <div v-show="show" class="col-md-12">
    <h4>デバック情報</h4>
    <p>range:{{ range }}<br>
      servant:{{ selectedServant }}<br>
      servantData:{{ selectedServantData }}<br>
      overCharge:{{ overCharge }} <br>
      NPvalue :{{ NPValue }}<br>
      enemyDeathRate:{{ enemyDeathRate }}<br>
      selectedskill :{{ selectedSkillAll }}<br>
      value :{{ selectedSkillAllValue }}<br>
      selectedskill :{{ selectedSkillSingle }}<br>
      value :{{ selectedSkillSingleValue }}<br>
      selectedskill :{{ selectedSkillSelf }}<br>
      value :{{ selectedSkillSelfValue }}<br>
      {{ filteredSkillList }}</p>
  </div>
</template>
