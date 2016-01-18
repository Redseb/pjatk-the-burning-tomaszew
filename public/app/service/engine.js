'use strict';

rocket.register.service("engine", function () {

  function parse(name, def) {
    var value = parseInt(localStorage.getItem(name));
    if (isNaN(value) || value === null) {
      localStorage.setItem(name, def);
      return def;
    } else return value;
  }

  var money = parse('money', 0);
  var profit = parse('profit', 1);
  var students = parse('students', 20);
  var lvl = '';
  var time = parse('time', 90*60);
  var after = null;

  function updateValues() {
    rocket.trigger('updateMoney', money);
    rocket.trigger('updateStudents', students);
    rocket.trigger('updateProfit', profit);
    rocket.trigger('updateTime', time);
  }

  function updateSkills(params) {
    rocket.trigger('updateSkills', params);
  }

  function tryUpgrade($parent) {

    if ($parent.className == 'upgrade green')
      return false;

    $parent.className += ' green';

    var $i = $parent.querySelector('i');
    $i.innerHTML = '';
    $i.className = 'fa fa-check';

    return true;
  }

  function upgrade(e, values) {

    if (!tryUpgrade(e)) return;

    var cost = values['money'];
    var student = values['students'];
    var prof = values['profit'];

    if (cost != undefined) {
      if (money < cost) {
        return;
      }
      money -= cost;
    }

    if (student != undefined) {
      if (students < student) {
        return;
      }
      students -= student;
    }

    if (prof != undefined) {
      profit += prof;
    }

    var callback = values['callback'];
    if (callback != undefined) callback();

    updateValues();
    updateSkills({
      'name' : values['name'],
    });
  };

  var skillsPower = {
    'zle' : 10,
    'tupanie' : 0,
    'procek69' : false
  };

  function renderSkill (element, params) {

    var div = document.createElement('div');
    div.className = 'skill';

    rocket.router.loadModuleIntoElement('content/tile/skill', div, params);

    element.appendChild(div);
  }

  function renderUpgrade (element, params) {

    var div = document.createElement('div');
    div.className = 'upgrade';

    rocket.router.loadModuleIntoElement('content/tile/upgrade', div, params);

    element.appendChild(div);

  }

  return {
    calc : function () {

      time--;
      money += profit;
      updateValues();
    },
    loadLvl : function () {
      /*rocket.trigger('updateLvl', {
        'lvl' : name
      });*/
      rocket.service(lvl).setUp();
      document.body.className = lvl;
    },
    getLvl : function () {
      return lvl;
    },
    getMoney : function () {
      return money;
    },
    getProfit : function () {
      return profit;
    },
    getTime : function () {
      return time;
    },
    getMenu : function () {
      return rocket.service(lvl).getMenu();
    },
    nextLvl : function () {
      switch (lvl) {
        case '':
          lvl = 'tomaszew95';
          break;
        case 'tomaszew95':
          lvl = 'tomaszewXP';
          break;
        case 'tomaszewXP':
          lvl = 'tomaszew10';
          break;
        case 'tomaszew10':
          lvl = 'os11tomaszew';
          break;
      }
      rocket.trigger('reloadMenu', this.getMenu());
      this.loadLvl(lvl);
      if (after != null) after();
    },
    setAfter : function (f) {
      after = f;
    },
    getSkills : function (letter) {
      return rocket.service(lvl).getSkills(letter);
    },
    getUpgrades : function (letter) {
      return rocket.service(lvl).getUpgrades(letter);
    },
    change : function (params) {

      var m = params['money'] || 0;
      var s = params['students'] || 0;
      var p = params['profit'] || 0;
      var t = params['time'] || 0;

      console.log('money', m);
      console.log('students', s);
      console.log('profit', p);

      //przypadek braku hajsu lub studentów
      if (money + m < 0 || students + s < 0) {
        return;
      }

      profit += p;
      students += s;
      money += m;
      time += t;

      updateValues();
    },
    'upgrade' : upgrade,
    renderSkills : function (letter, element) {

      var skills = this.getSkills(letter);

      for (var i = 0, l = skills.length; i < l; i++) {

        renderSkill(element, skills[i]);

      }
    },
    renderUpgrades : function (letter, element) {
      var upgrades = this.getUpgrades(letter);

      for (var i = 0, l = upgrades.length; i < l; i++) {

        renderUpgrade(element, upgrades[i]);

      }

    }
  };
});

setInterval(rocket.service("engine").calc, 1000);
