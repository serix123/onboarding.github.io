function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KYKMwpK7G5":
        Script1();
        break;
      case "6eIo8uh5TWZ":
        Script2();
        break;
      case "6PXDpHt9lS5":
        Script3();
        break;
      case "5pc16oUeSxF":
        Script4();
        break;
      case "5tUXP8SrKUR":
        Script5();
        break;
      case "5sAlV3RvX5b":
        Script6();
        break;
      case "5a8CGsKLc98":
        Script7();
        break;
      case "5aBeLlq8HyK":
        Script8();
        break;
      case "5kfMWxT1opa":
        Script9();
        break;
      case "5yr664z6x9S":
        Script10();
        break;
      case "5VgA2UNS6UJ":
        Script11();
        break;
      case "5wDXxbkU1Pg":
        Script12();
        break;
      case "6khYfh9VPpo":
        Script13();
        break;
      case "5VksmhIGFPH":
        Script14();
        break;
      case "6pkfJOyS0qi":
        Script15();
        break;
      case "5sxL5kOCgvP":
        Script16();
        break;
      case "5kWkc7Nb6Lw":
        Script17();
        break;
      case "6bzAQDy8xdO":
        Script18();
        break;
      case "6COtQZ7TIGM":
        Script19();
        break;
      case "6Y2MdirIRer":
        Script20();
        break;
      case "5pr94vOVMBe":
        Script21();
        break;
      case "6CRdFJ3xQE4":
        Script22();
        break;
      case "5lb4J4iqMzR":
        Script23();
        break;
      case "5n3O3rYLeRh":
        Script24();
        break;
      case "67NAdVe0nit":
        Script25();
        break;
      case "5nU5bfBqWi9":
        Script26();
        break;
      case "60GChe7iSUd":
        Script27();
        break;
      case "60rO29DTmB9":
        Script28();
        break;
      case "6Z5jxiOoCEr":
        Script29();
        break;
      case "5xx8jTZMciR":
        Script30();
        break;
      case "6g0EVL6kuTq":
        Script31();
        break;
      case "6nBo3MIKoJi":
        Script32();
        break;
      case "5yLwYGNq9Mn":
        Script33();
        break;
      case "6OZBUpeHaYw":
        Script34();
        break;
      case "5tbx7Vert9s":
        Script35();
        break;
      case "5ZLQ5iAAxW5":
        Script36();
        break;
      case "5pYgjePsF3e":
        Script37();
        break;
      case "5hEGI4vIQmb":
        Script38();
        break;
      case "6PZ0bNo9RfJ":
        Script39();
        break;
      case "6i1dzgQnuQH":
        Script40();
        break;
      case "5sf3td2I1XY":
        Script41();
        break;
      case "62SaCprmQb0":
        Script42();
        break;
      case "6pILqTW5Qqf":
        Script43();
        break;
      case "6jftivO1KtL":
        Script44();
        break;
      case "6bcHwN617TO":
        Script45();
        break;
      case "6llUds85Q1t":
        Script46();
        break;
      case "6endFVnkj1g":
        Script47();
        break;
      case "6Ug5U6QbO44":
        Script48();
        break;
      case "5jx7iFOoZav":
        Script49();
        break;
      case "6BIlfXVVCJZ":
        Script50();
        break;
      case "5vozH2conds":
        Script51();
        break;
      case "68xeaMBhCJJ":
        Script52();
        break;
      case "6FS20Yt2tf2":
        Script53();
        break;
      case "5ueKv0Swf9n":
        Script54();
        break;
      case "5UraCYO8n4k":
        Script55();
        break;
      case "6IQfc6HyFCf":
        Script56();
        break;
      case "66ZdD1bC2W5":
        Script57();
        break;
      case "6NdMj5O0CcO":
        Script58();
        break;
      case "5nWb0MFeCki":
        Script59();
        break;
      case "5c6Oe6E5rHh":
        Script60();
        break;
      case "5yWaaBrnInw":
        Script61();
        break;
      case "6KXpb4tHVBC":
        Script62();
        break;
      case "5gNCkGRJFjX":
        Script63();
        break;
      case "6ZjlhFnfSp2":
        Script64();
        break;
      case "6fqtzPstVLv":
        Script65();
        break;
      case "5dsBF3aIfmC":
        Script66();
        break;
      case "6JSTzVvWrEb":
        Script67();
        break;
      case "6MAFXiZjhS9":
        Script68();
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
  const target = object('5q1B9q8PYwn');
const duration = 250;
const easing = 'ease-out';
const id = '5qiGINUOEAh';
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
  const target = object('5q1B9q8PYwn');
const duration = 250;
const easing = 'ease-out';
const id = '5qiGINUOEAh_reverse';
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
  const target = object('66CXPxptQ4a');
const duration = 250;
const easing = 'ease-out';
const id = '6FQClkwyIu2';
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
  const target = object('66CXPxptQ4a');
const duration = 250;
const easing = 'ease-out';
const id = '6FQClkwyIu2_reverse';
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
  const target = object('6DxPyrwHn2w');
const duration = 250;
const easing = 'ease-out';
const id = '64dYsnUsk1n';
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
  const target = object('6DxPyrwHn2w');
const duration = 250;
const easing = 'ease-out';
const id = '64dYsnUsk1n_reverse';
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
  const target = object('6mrpyCRSA7Y');
const duration = 250;
const easing = 'ease-out';
const id = '6QZJ1xpTPMv';
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
  const target = object('6mrpyCRSA7Y');
const duration = 250;
const easing = 'ease-out';
const id = '6QZJ1xpTPMv_reverse';
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
  const target = object('5sCkYWKS0mA');
const duration = 250;
const easing = 'ease-out';
const id = '5ZvM30KgVTB';
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
  const target = object('5sCkYWKS0mA');
const duration = 250;
const easing = 'ease-out';
const id = '5ZvM30KgVTB_reverse';
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
  const target = object('6DmqSpsit6V');
const duration = 250;
const easing = 'ease-out';
const id = '6Tcb76tTNCV';
const growAmount = 0.3;
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
  const target = object('6DmqSpsit6V');
const duration = 250;
const easing = 'ease-out';
const id = '6Tcb76tTNCV_reverse';
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
  const target = object('60vjAAG4ujl');
const duration = 250;
const easing = 'ease-out';
const id = '6TU1Oax3Nfg';
const growAmount = 0.3;
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
  const target = object('60vjAAG4ujl');
const duration = 250;
const easing = 'ease-out';
const id = '6TU1Oax3Nfg_reverse';
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
  const target = object('5a0gvhrq6jr');
const duration = 250;
const easing = 'ease-out';
const id = '6N5GYtJ6Ow7';
const growAmount = 0.3;
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
  const target = object('5a0gvhrq6jr');
const duration = 250;
const easing = 'ease-out';
const id = '6N5GYtJ6Ow7_reverse';
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
  const target = object('5xNsWUu2ZiC');
const duration = 250;
const easing = 'ease-out';
const id = '5idXxtYAR5p';
const growAmount = 0.3;
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
  const target = object('5xNsWUu2ZiC');
const duration = 250;
const easing = 'ease-out';
const id = '5idXxtYAR5p_reverse';
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
  const target = object('6drS6uPE5j9');
const duration = 250;
const easing = 'ease-out';
const id = '5yQrtqWOJU3';
const growAmount = 0.3;
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
  const target = object('6drS6uPE5j9');
const duration = 250;
const easing = 'ease-out';
const id = '5yQrtqWOJU3_reverse';
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
  const target = object('5a1vue1TTOW');
const duration = 250;
const easing = 'ease-out';
const id = '65vzialFoGv';
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

window.Script22 = function()
{
  const target = object('5a1vue1TTOW');
const duration = 250;
const easing = 'ease-out';
const id = '65vzialFoGv_reverse';
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
  const target = object('5cKx8ZpG7mM');
const duration = 250;
const easing = 'ease-out';
const id = '5t3sOXkClnN';
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

window.Script24 = function()
{
  const target = object('5cKx8ZpG7mM');
const duration = 250;
const easing = 'ease-out';
const id = '5t3sOXkClnN_reverse';
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
  const target = object('5qtcP0zeNtx');
const duration = 250;
const easing = 'ease-out';
const id = '5eZvnGzMAQX';
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

window.Script26 = function()
{
  const target = object('5qtcP0zeNtx');
const duration = 250;
const easing = 'ease-out';
const id = '5eZvnGzMAQX_reverse';
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
  const target = object('6FNB2NYHGtJ');
const duration = 250;
const easing = 'ease-out';
const id = '5prcfOHOe5x';
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

window.Script28 = function()
{
  const target = object('6FNB2NYHGtJ');
const duration = 250;
const easing = 'ease-out';
const id = '5prcfOHOe5x_reverse';
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
  const target = object('6dd6LSwOpFv');
const duration = 250;
const easing = 'ease-out';
const id = '67K2Ciih5yX';
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

window.Script30 = function()
{
  const target = object('6dd6LSwOpFv');
const duration = 250;
const easing = 'ease-out';
const id = '67K2Ciih5yX_reverse';
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
  const target = object('5pDQVtAtwxl');
const duration = 250;
const easing = 'ease-out';
const id = '6SctPg2tZsx';
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

window.Script32 = function()
{
  const target = object('5pDQVtAtwxl');
const duration = 250;
const easing = 'ease-out';
const id = '6SctPg2tZsx_reverse';
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
  const target = object('6pZInvH5B13');
const duration = 250;
const easing = 'ease-out';
const id = '6BQvVswKov7';
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
  const target = object('6pZInvH5B13');
const duration = 250;
const easing = 'ease-out';
const id = '6BQvVswKov7_reverse';
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
  const target = object('5ptJn2oaglm');
const duration = 250;
const easing = 'ease-out';
const id = '6C7Trb9O2XX';
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
  const target = object('5ptJn2oaglm');
const duration = 250;
const easing = 'ease-out';
const id = '6C7Trb9O2XX_reverse';
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
  const target = object('6c6EQKvJXjU');
const duration = 250;
const easing = 'ease-out';
const id = '6575a0iWlPF';
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
  const target = object('6c6EQKvJXjU');
const duration = 250;
const easing = 'ease-out';
const id = '6575a0iWlPF_reverse';
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
  const target = object('5voTw7RVZmn');
const duration = 250;
const easing = 'ease-out';
const id = '5lztztKX1hj';
const growAmount = 0.3;
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
  const target = object('5voTw7RVZmn');
const duration = 250;
const easing = 'ease-out';
const id = '5lztztKX1hj_reverse';
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
  const target = object('6BwgySYrRP4');
const duration = 250;
const easing = 'ease-out';
const id = '67GX8EvT6KV';
const growAmount = 0.3;
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
  const target = object('6BwgySYrRP4');
const duration = 250;
const easing = 'ease-out';
const id = '67GX8EvT6KV_reverse';
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
  const target = object('5qz0EbeIbul');
const duration = 250;
const easing = 'ease-out';
const id = '5tGWuyDucac';
const growAmount = 0.3;
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
  const target = object('5qz0EbeIbul');
const duration = 250;
const easing = 'ease-out';
const id = '5tGWuyDucac_reverse';
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
  const target = object('6pRfP3ng2Kw');
const duration = 250;
const easing = 'ease-out';
const id = '68XG49uozfm';
const growAmount = 0.3;
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
  const target = object('6pRfP3ng2Kw');
const duration = 250;
const easing = 'ease-out';
const id = '68XG49uozfm_reverse';
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
  const target = object('6XRVOckNnKP');
const duration = 250;
const easing = 'ease-out';
const id = '6VgZANlNOZA';
const growAmount = 0.3;
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
  const target = object('6XRVOckNnKP');
const duration = 250;
const easing = 'ease-out';
const id = '6VgZANlNOZA_reverse';
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
  const target = object('65jjP2wj3Tb');
const duration = 250;
const easing = 'ease-out';
const id = '5i27e5jCzVO';
const growAmount = 0.3;
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
  const target = object('65jjP2wj3Tb');
const duration = 250;
const easing = 'ease-out';
const id = '5i27e5jCzVO_reverse';
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
  const target = object('5n3lmZhlWNu');
const duration = 250;
const easing = 'ease-out';
const id = '6J9KMd24cKe';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('5n3lmZhlWNu');
const duration = 250;
const easing = 'ease-out';
const id = '6J9KMd24cKe_reverse';
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

window.Script53 = function()
{
  const target = object('5hQCtMToxeh');
const duration = 250;
const easing = 'ease-out';
const id = '6ojXH0wxsyg';
const growAmount = 0.3;
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
  const target = object('5hQCtMToxeh');
const duration = 250;
const easing = 'ease-out';
const id = '6ojXH0wxsyg_reverse';
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

window.Script55 = function()
{
  const target = object('6qfmFhbBm5A');
const duration = 250;
const easing = 'ease-out';
const id = '6mj4j5JRLIO';
const growAmount = 0.3;
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
  const target = object('6qfmFhbBm5A');
const duration = 250;
const easing = 'ease-out';
const id = '6mj4j5JRLIO_reverse';
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

window.Script57 = function()
{
  const target = object('6Au9SeOWJ5W');
const duration = 250;
const easing = 'ease-out';
const id = '5bq0kitxKJu';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('6Au9SeOWJ5W');
const duration = 250;
const easing = 'ease-out';
const id = '5bq0kitxKJu_reverse';
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

window.Script59 = function()
{
  const target = object('6DQYbzwiQJs');
const duration = 250;
const easing = 'ease-out';
const id = '6Ns81Vho40X';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6DQYbzwiQJs');
const duration = 250;
const easing = 'ease-out';
const id = '6Ns81Vho40X_reverse';
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

window.Script61 = function()
{
  const target = object('6PzEKaQ7627');
const duration = 250;
const easing = 'ease-out';
const id = '5uQx10rkeJc';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('6PzEKaQ7627');
const duration = 250;
const easing = 'ease-out';
const id = '5uQx10rkeJc_reverse';
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

window.Script63 = function()
{
  const target = object('5tXg29q5uS5');
const duration = 250;
const easing = 'ease-out';
const id = '66TOpaVDrwQ';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('5tXg29q5uS5');
const duration = 250;
const easing = 'ease-out';
const id = '66TOpaVDrwQ_reverse';
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

window.Script65 = function()
{
  const target = object('6jwHaat6YP6');
const duration = 250;
const easing = 'ease-out';
const id = '6k2C3dSvy9v';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6jwHaat6YP6');
const duration = 250;
const easing = 'ease-out';
const id = '6k2C3dSvy9v_reverse';
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

window.Script67 = function()
{
  const target = object('6RohUX0ovHh');
const duration = 250;
const easing = 'ease-out';
const id = '6lzDGSSvYXB';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script68 = function()
{
  const target = object('6RohUX0ovHh');
const duration = 250;
const easing = 'ease-out';
const id = '6lzDGSSvYXB_reverse';
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
