function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6a4GmYpDjZ8":
        Script1();
        break;
      case "6SmyalMaY9P":
        Script2();
        break;
      case "67a81ySXPAg":
        Script3();
        break;
      case "6nArWcR8Jtb":
        Script4();
        break;
      case "6aCELE2Sv7T":
        Script5();
        break;
      case "6jo9dD9nGAh":
        Script6();
        break;
      case "5sSmK03hdXp":
        Script7();
        break;
      case "6bMyWXNtHDO":
        Script8();
        break;
      case "63awjtZyf3X":
        Script9();
        break;
      case "6Il3asCKGfw":
        Script10();
        break;
      case "6jdjk9hoACX":
        Script11();
        break;
      case "6SxRGgcOwZx":
        Script12();
        break;
      case "5l36dxqgGZD":
        Script13();
        break;
      case "5ZQnTKpoeXV":
        Script14();
        break;
      case "6nuXSTLkqWU":
        Script15();
        break;
      case "6eKpf1cPF4S":
        Script16();
        break;
      case "61qx4XPjh6b":
        Script17();
        break;
      case "6C6C6O77jwS":
        Script18();
        break;
      case "6qH7tR66eXf":
        Script19();
        break;
      case "67TJtacq89k":
        Script20();
        break;
      case "5ioiDyh6lyS":
        Script21();
        break;
      case "6PiPmlPHUBj":
        Script22();
        break;
      case "6rm8PUJQmov":
        Script23();
        break;
      case "6oOEjJWDDCb":
        Script24();
        break;
      case "6lZYoH5Eg9T":
        Script25();
        break;
      case "6EljF8t9q7Q":
        Script26();
        break;
      case "68kZvbxvIQ8":
        Script27();
        break;
      case "6dPRHKt8b2r":
        Script28();
        break;
      case "5UwghaBC690":
        Script29();
        break;
      case "6WIyNgfPEIL":
        Script30();
        break;
      case "5h0rCeXscIr":
        Script31();
        break;
      case "6LlWZFelSv9":
        Script32();
        break;
      case "6U8Sydhs6kk":
        Script33();
        break;
      case "5X8vAOeRLKs":
        Script34();
        break;
      case "6FMDkfhYfwm":
        Script35();
        break;
      case "6ert9cM5tcz":
        Script36();
        break;
      case "6fwWNd1EGvb":
        Script37();
        break;
      case "6nejh6BpNl7":
        Script38();
        break;
      case "6gm58KnFjaz":
        Script39();
        break;
      case "5isE2qjWiDh":
        Script40();
        break;
      case "6dSB12uI1BH":
        Script41();
        break;
      case "6ICXxmC9al8":
        Script42();
        break;
      case "5zfUMqkPXkm":
        Script43();
        break;
      case "65eAqJfKTUL":
        Script44();
        break;
      case "6A7WahtS4rt":
        Script45();
        break;
      case "6K2LFoSCzyb":
        Script46();
        break;
      case "6fvi34FSsKQ":
        Script47();
        break;
      case "6JzOrsMuFIV":
        Script48();
        break;
      case "5ZF0kZHgEP2":
        Script49();
        break;
      case "5ZEeGA0rixw":
        Script50();
        break;
      case "5WSjtmYGjel":
        Script51();
        break;
      case "6M4qHWlSfU8":
        Script52();
        break;
      case "6cBJRzErJYL":
        Script53();
        break;
      case "6UmbrSoMldb":
        Script54();
        break;
      case "6AQ713JlW6J":
        Script55();
        break;
      case "65hHJ4TigrZ":
        Script56();
        break;
      case "5WIdp7PLqQr":
        Script57();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6ppbmpuWzub');
const duration = 250;
const easing = 'ease-in';
const id = '5XIoi55slja';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6ppbmpuWzub');
const duration = 250;
const easing = 'ease-in';
const id = '5XIoi55slja_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6PGkLfn1CvL');
const duration = 250;
const easing = 'ease-out';
const id = '6CrBvuI4zks';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6PGkLfn1CvL');
const duration = 250;
const easing = 'ease-out';
const id = '6CrBvuI4zks_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6eXb8fsuICo');
const duration = 250;
const easing = 'ease-out';
const id = '6jpWaxGeeYK';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6eXb8fsuICo');
const duration = 250;
const easing = 'ease-out';
const id = '6jpWaxGeeYK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5qAf7dPVUyK');
const duration = 250;
const easing = 'ease-out';
const id = '6DnSjWCWE0k';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5qAf7dPVUyK');
const duration = 250;
const easing = 'ease-out';
const id = '6DnSjWCWE0k_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6VxybICuCjn');
const duration = 250;
const easing = 'ease-out';
const id = '6XuAkZ6vZ22';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6VxybICuCjn');
const duration = 250;
const easing = 'ease-out';
const id = '6XuAkZ6vZ22_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6cl9dKyucvu');
const duration = 250;
const easing = 'ease-out';
const id = '5mcpK1FZkcn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6cl9dKyucvu');
const duration = 250;
const easing = 'ease-out';
const id = '5mcpK1FZkcn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6hWRhLV699x');
const duration = 250;
const easing = 'ease-out';
const id = '5r8sBUDQmI9';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6hWRhLV699x');
const duration = 250;
const easing = 'ease-out';
const id = '5r8sBUDQmI9_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6qspHlaMH5K');
const duration = 250;
const easing = 'ease-out';
const id = '67FTtKr7CHI';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6qspHlaMH5K');
const duration = 250;
const easing = 'ease-out';
const id = '67FTtKr7CHI_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6djqoL703S6');
const duration = 250;
const easing = 'ease-out';
const id = '5VsiXAYAw57';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6djqoL703S6');
const duration = 250;
const easing = 'ease-out';
const id = '5VsiXAYAw57_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6Nlie02QydE');
const duration = 250;
const easing = 'ease-out';
const id = '6Avzh4YQ9im';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6Nlie02QydE');
const duration = 250;
const easing = 'ease-out';
const id = '6Avzh4YQ9im_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6dpNe1ClQxf');
const duration = 250;
const easing = 'ease-out';
const id = '5Uicb2MOOeq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6dpNe1ClQxf');
const duration = 250;
const easing = 'ease-out';
const id = '5Uicb2MOOeq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5pV0JU7n4hk');
const duration = 250;
const easing = 'ease-out';
const id = '6LIM5Cjc9oU';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5pV0JU7n4hk');
const duration = 250;
const easing = 'ease-out';
const id = '6LIM5Cjc9oU_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6pyUapLB41H');
const duration = 250;
const easing = 'ease-out';
const id = '6ph5KEK0WQ1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6pyUapLB41H');
const duration = 250;
const easing = 'ease-out';
const id = '6ph5KEK0WQ1_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('67LP2OFThWq');
const duration = 250;
const easing = 'ease-out';
const id = '5Uicb2MOOeq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('67LP2OFThWq');
const duration = 250;
const easing = 'ease-out';
const id = '5Uicb2MOOeq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5nVlwKFt7Lv');
const duration = 250;
const easing = 'ease-out';
const id = '6LIM5Cjc9oU';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5nVlwKFt7Lv');
const duration = 250;
const easing = 'ease-out';
const id = '6LIM5Cjc9oU_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('60kI8Mb3tUY');
const duration = 250;
const easing = 'ease-out';
const id = '6ph5KEK0WQ1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('60kI8Mb3tUY');
const duration = 250;
const easing = 'ease-out';
const id = '6ph5KEK0WQ1_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('68INBkxj7IQ');
const duration = 250;
const easing = 'ease-out';
const id = '6K5i5RJnpNs';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('68INBkxj7IQ');
const duration = 250;
const easing = 'ease-out';
const id = '6K5i5RJnpNs_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('69f7ctp3LrP');
const duration = 250;
const easing = 'ease-out';
const id = '6paZC6KFdQt';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('69f7ctp3LrP');
const duration = 250;
const easing = 'ease-out';
const id = '6paZC6KFdQt_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5qInMWp9oIa');
const duration = 250;
const easing = 'ease-out';
const id = '6rnYXkW21bA';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('5qInMWp9oIa');
const duration = 250;
const easing = 'ease-out';
const id = '6rnYXkW21bA_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6WaGchyOtJ8');
const duration = 250;
const easing = 'ease-out';
const id = '6F1ClWwuWob';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6WaGchyOtJ8');
const duration = 250;
const easing = 'ease-out';
const id = '6F1ClWwuWob_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('65NMrXWbNNF');
const duration = 250;
const easing = 'ease-out';
const id = '6ZrpE0WIVEx';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('65NMrXWbNNF');
const duration = 250;
const easing = 'ease-out';
const id = '6ZrpE0WIVEx_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('5WcgGLNgPJH');
const duration = 250;
const easing = 'ease-out';
const id = '5Wtku8EXzsr';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('5WcgGLNgPJH');
const duration = 250;
const easing = 'ease-out';
const id = '5Wtku8EXzsr_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6iq5BDsYZHp');
const duration = 250;
const easing = 'ease-out';
const id = '6F1ClWwuWob';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6iq5BDsYZHp');
const duration = 250;
const easing = 'ease-out';
const id = '6F1ClWwuWob_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('5cFPgENzVmG');
const duration = 250;
const easing = 'ease-out';
const id = '6ZrpE0WIVEx';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('5cFPgENzVmG');
const duration = 250;
const easing = 'ease-out';
const id = '6ZrpE0WIVEx_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('65m9hL9jUyH');
const duration = 250;
const easing = 'ease-out';
const id = '5Wtku8EXzsr';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('65m9hL9jUyH');
const duration = 250;
const easing = 'ease-out';
const id = '5Wtku8EXzsr_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  player.once(() => {
const target = object('6JzEoz83Yjr');
const duration = 750;
const easing = 'ease-out';
const id = '68QdSktCOkc';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  const target = object('6pv5UD2QGKH');
const duration = 250;
const easing = 'ease-out';
const id = '6keSIywyBtz';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6pv5UD2QGKH');
const duration = 250;
const easing = 'ease-out';
const id = '6keSIywyBtz_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('5gJL2tn1TZs');
const duration = 250;
const easing = 'ease-out';
const id = '5bOwVIo9ZaN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5gJL2tn1TZs');
const duration = 250;
const easing = 'ease-out';
const id = '5bOwVIo9ZaN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('5yjk0zQhsg3');
const duration = 250;
const easing = 'ease-out';
const id = '6adqDbBroja';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('5yjk0zQhsg3');
const duration = 250;
const easing = 'ease-out';
const id = '6adqDbBroja_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
