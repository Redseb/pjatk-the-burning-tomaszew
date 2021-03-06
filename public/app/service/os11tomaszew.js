'use strict';

rocket.register.service('os11tomaszew', function() {

  var menu = [
    {
      'name' : '',
      'letter' : 't',
      'hash' : '#/tomaszew',
      'src' : 'media/tomaszew.jpg',
      'callback' : function () {
        document.body.className = 'os11tomaszew tomaszew'
      }
    },
    {
      'icon' : 'fa fa-users',
      'name' : '',
      'hash' : '#/aula',
      'letter' : 'a',
      'default' : true,
      'callback' : function () {
        document.body.className = 'os11tomaszew aula'
      }
    },
    {
      'icon' : 'fa fa-desktop',
      'name' : '',
      'hash' : '#/cwiczenia',
      'letter' : 'c',
      'callback' : function () {
        document.body.className = 'os11tomaszew cwiczenia'
      }
    },
    {
      'icon' : 'fa fa-book',
      'name' : '',
      'hash' : '#/s9',
      'letter' : 'b',
      'callback' : function () {
        document.body.className = 'os11tomaszew s9'
      }
    }
  ];
  var data = {
    'a' : {
      'skills' : [
        {
          'name' : 'źle!',
          'icon' : 'fa-exclamation-triangle fa-3x',
          'enabled' : true,
          'info' : '+1 kod',
          'time' : 1,
          'click' : function () {
            rocket.service('engine').change({
              'money' : 2,
              'time' : 1
            });
          }
        },
        {
          'name' : 'słuchaj wykładu',
          'icon' : 'fa-graduation-cap fa-3x',
          'enabled' : true,
          'info' : '+2 kodu',
          'click' : function () {
            rocket.service('engine').change({
              'kod' : 2
            });
          }
        },
        {
          'name' : 'nie sluchaj wykladu',
          'icon' : 'fa-graduation-cap fa-3x',
          'enabled' : false,
          'info' : '+1 student',
          'click' : function () {
            rocket.service('engine').change({
              'students' : 1
            });
          }
        },
        {
          'name' : 'asystuj profesorowi',
          'icon' : 'fa-play fa-3x',
          'enabled' : false,
          'info' : '+1 profit',
          'click' : function () {
            console.log('elo');
          }
        }
      ],
      'upgrades' : [
        {
          'name' : 'kup sluchawki',
          'icon' : 'brak fa-3x',
          'enabled' : true,
          'koszt' : 100,
          'opis' : 'na co komu wyklad?',
          'click' : function (e) {
            rocket.service("engine").upgrade(e, {
              'koszt' : 100,
              'name' : 'nie sluchaj wykladu'
            });
          }
        },
        {
          'name' : 'namow profesora na wyklad',
          'icon' : 'fa-cash fa-3x',
          'enabled' : true,
          'koszt' : 100,
          'opis' : 'zacznij prowadzic wyklady',
          'click' : function (e) {
            rocket.service("engine").upgrade(e, {
              'koszt' : 100,
              'name' : 'asystuj profesorowi'
            });
          }
        }
      ]
    },
    'c' : {
      'skills' : [
        {
          'name' : 'rob zadania',
          'icon' : 'fa-tasks fa-3x',
          'enabled' : true,
          'info' : '+2 kod',
          'click' : function () {
            rocket.service('engine').change({
              'money' : 2
            });
          }
        },
        {
          'name' : 'pomoz kodzic znajomemu',
          'icon' : 'fa-medkit fa-3x',
          'enabled' : true,
          'info' : '-2 kod&+1 student',
          'click' : function () {
            rocket.service('engine').change({
              'money' : 2
            });
          }
        },
        {
          'name' : 'wytknij blad prowadzacemu',
          'icon' : 'fa-comment fa-3x',
          'enabled' : true,
          'info' : '-10 kod&+2 studentów',
          'click' : function () {
            rocket.service('engine').change({
              'money' : -10,
              'students' : 2
            });
          }
        },
      ],
      'upgrades' : []
    },
    'b' : {
      'skills' : [
        {
          'name' : 'czytaj dokumentację',
          'icon' : 'fa-book fa-3x',
          'enabled' : true,
          'info' : '+1 kod',
          'click' : function () {
            rocket.service('engine').change({
              'money' : 1
            });
          }
        },
        {
          'name' : 'wez udzial w konkusie',
          'icon' : 'fa-play fa-3x',
          'enabled' : false,
          'info' : '+1 profit&-5 studentów',
          'click' : function () {
            rocket.service('engine').change({
              'profit' : 1,
              'students' : -5
            });
          }
        }
      ],
      'upgrades' : [
        {
          'name' : 'naucz sie kompilatora na pamiec',
          'koszt' : 100,
          'info' : 'umożliwia udzial w konkursie',
          'click' : function (e) {

            rocket.service("engine").upgrade(e, {
              'koszt' : 100,
              'name' : 'wez udzial w konkusie'
            });

          }
        }
      ]
    },
    't' : {
      'skills' : [
        {
          'name' : 'graj w pasjansa online',
          'icon' : 'fa-play fa-3x',
          'enabled' : false,
          'info' : '+1 studentów',
          'click' : function () {
            rocket.service('engine').change({
              'students' : 1
            });
          }
        },
        {
          'name' : 'koduj w microJava',
          'icon' : 'fa-play fa-3x',
          'enabled' : false,
          'info' : '+2 kodu',
          'click' : function () {
            rocket.service('engine').change({
              'money' : 2
            });
          }
        },
        {
          'name' : 'tomaszewXP',
          'icon' : 'fa-star fa-3x',
          'enabled' : false,
          'info' : 'zainstaluj nowy system',
          'click' : function () {
            //todo
          }
        }
      ],
      'upgrades' : [
        {
          'name' : 'kup modem',
          'koszt' : 100,
          'info' : 'umożliwia gre w pasjansa online',
          'click' : function (e) {

            rocket.service("engine").upgrade(e, {
              'koszt' : 100,
              'name' : 'graj w pasjansa online'
            });

          }
        },
        {
          'name' : 'napisz microJava',
          'icon' : 'fa-play fa-3x',
          'enabled' : true,
          'koszt' : 200,
          'info' : '+1 profit',
          'click' : function (e) {
            rocket.service("engine").upgrade(e, {
              'koszt' : 100,
              'name' : 'koduj w microJava',
              'profit' : 5
            });
          }
        },
        {
          'name' : 'napisz inzynierke',
          'koszt' : 1000,
          'info' : 'odblokowuje upgrade do tomaszewXP',
          'click' : function (e) {

            rocket.service("engine").upgrade(e, {
              'name' : 'tomaszewXP',
              'koszt' : 1000
            });

          }
        },
      ]
    }
  }

  return {
    getSkills : function (letter) {
      return data[letter]['skills'];
    },
    getUpgrades : function (letter) {
      return data[letter]['upgrades'];
    },
    getMenu : function () {
      return menu;
    },
    upgrade : function (letter, name) {
      for (var i = 0, l = data[letter]['upgrades'].length; i < l; i++) {
        if (data[letter]['upgrades'][i]['unlock'] == name) {
          data[letter]['upgrades'][i]['enabled'] = false;
        }
      }
      for (var i = 0, l = data[letter]['skills'].length; i < l; i++) {
        if (data[letter]['skills'][i]['name'] == name) {
          data[letter]['skills'][i]['enabled'] = true;
        }
      }
    },
    setUp : function () {
    }
  };
});
