var OC;
var servant;
var servant_skill;
var servant_oc_arry;
var eDR;

var all_resist_skill_sum;
var single_resist_skill_sum;
var self_skill_sum;

var calc;

OC = 1;
eDR = 100;
servant = "荊軻";
servant_skill = { name: "へべれけパワー EX" };
servant_oc_arry = [0, 0, 0, 0, 0];
all_resist_skill_sum = 0;
single_resist_skill_sum = 0;
self_skill_sum = 0;
calc = 0;
document.getElementById("debug").style.display = "none";

function check_range(value) {
  const myselect = document.getElementById("select_servant");
  myselect.innerHTML = "";
  document.createElement("option");
  for (let i = 0; i < Data.length; i++) {
    const myoption = document.createElement("option");
    if (Data[i]["range"] == value) {
      myoption.setAttribute("value", Data[i]["name"]);
      myoption.innerHTML = Data[i]["name"];
      myselect.appendChild(myoption);
    }
  }
}

function check_servant(value) {
  servant = value;
  for (i = 0; i < Data.length; i++) {
    const hoge = Data[i]["name"];
    if (hoge == servant) {
      servant_skill = Data[i]["skill"];
      servant_oc_arry = Data[i]["overcharge"];
    }
  }
  skill2();
}

function check_OC(value) {
  OC = Number(value);
}

function check_eDR(value) {
  eDR = Number(value);
}

function skill0() {
  const mydiv = document.getElementById("skill0");
  for (i = 0; i < Data.length; i++) {
    const hoge = Data[i].skill.range;
    if (hoge == "全体") {
      const mybtn = document.createElement("input");
      const mylabel = document.createElement("label");
      const myspan = document.createElement("span");
      mybtn.type = "checkbox";
      mybtn.name = "all_resist_skill";
      mybtn.value = Data[i].skill.value;
      const text = Data[i].name + " " + Data[i].skill.name;
      myspan.innerText = text;
      mylabel.appendChild(mybtn);
      mylabel.appendChild(myspan);
      mydiv.appendChild(mylabel);
    }
  }
}

function skill1() {
  const mydiv = document.getElementById("skill1");
  for (i = 0; i < Data.length; i++) {
    const hoge = Data[i].skill.range;
    if (hoge == "単体") {
      const mybtn = document.createElement("input");
      const mylabel = document.createElement("label");
      const myspan = document.createElement("span");
      mybtn.type = "checkbox";
      mybtn.name = "single_resist_skill";
      mybtn.value = Data[i].skill.value;
      const text = Data[i].name + " " + Data[i].skill.name;
      myspan.innerText = text;
      mylabel.appendChild(mybtn);
      mylabel.appendChild(myspan);
      mydiv.appendChild(mylabel);
    }
  }
}

function skill2() {
  const mydiv = document.getElementById("skill2");
  const mybtn = document.createElement("input");
  const mylabel = document.createElement("label");
  const myspan = document.createElement("span");
  mydiv.innerHTML = null;
  if (servant_skill["range"] == "自身") {
    mybtn.type = "checkbox";
    mybtn.id = "self_skill";
    mybtn.value = servant_skill["value"];
    mybtn.checked = true;
    myspan.innerText = servant_skill["name"];
    mylabel.appendChild(mybtn);
    mylabel.appendChild(myspan);
    mydiv.appendChild(mylabel);
  } else {
    mybtn.type = "hidden";
    mybtn.id = "self_skill";
    mybtn.value = 0;
    mydiv.appendChild(mybtn);
  }
}

function skill_form() {
  const arsf = document.forms.all_resist_skill_form;
  all_resist_skill_sum = 0;
  for (i = 0; i < arsf.length; i++) {
    if (arsf[i].checked == true) {
      all_resist_skill_sum = all_resist_skill_sum + Number(arsf[i].value);
    }
  }

  const srsf = document.forms.single_resist_skill_form;
  single_resist_skill_sum = 0;
  for (i = 0; i < srsf.length; i++) {
    if (srsf[i].checked == true) {
      single_resist_skill_sum = single_resist_skill_sum + Number(srsf[i].value);
    }
  }

  self_skill_sum = 0;
  if (
    document.forms.self_skill_form[0].type == "checkbox" &&
    document.forms.self_skill_form[0].checked == true
  ) {
    self_skill_sum =
      self_skill_sum + Number(document.forms.self_skill_form[0].value);
  } else {
    self_skill_sum = 0;
  }
}

function calculate() {
  skill_form();

  var calc_temp1 = OC - 1;
  var calc_temp2 = servant_oc_arry[calc_temp1];
  var calc_temp3 =
    100 + all_resist_skill_sum + single_resist_skill_sum + self_skill_sum;
  var calc_temp4 = (calc_temp2 * eDR * calc_temp3) / 10000;
  calc = calc_temp4;
  document.getElementById("span200").textContent = calc;

  debug();
}

function firstONLY() {
  check_range("全体");
  skill0();
  skill1();
  skill2();
  debug();
}

function debug() {
  skill_form();
  document.getElementById("span201").textContent = Number(OC);
  document.getElementById("span202").textContent = servant;
  document.getElementById("span203").textContent = servant_skill["name"];
  document.getElementById("span204").textContent = eDR;
  document.getElementById("span205").textContent = all_resist_skill_sum;
  document.getElementById("span206").textContent = single_resist_skill_sum;
  document.getElementById("span207").textContent = self_skill_sum;
  document.getElementById("span208").textContent = servant_oc_arry;
  document.getElementById("span209").textContent = calc;
}

function debugbtn() {
  if (document.getElementById("debug").style.display == "none") {
    document.getElementById("debug").style.display = "block";
    console.log(document.getElementById("debug").style.display);
  } else {
    document.getElementById("debug").style.display = "none";
    console.log(document.getElementById("debug").style.display);
  }
}
