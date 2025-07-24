function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ok0tdQvtZt":
        Script1();
        break;
      case "5jAsc92LPQA":
        Script2();
        break;
      case "6SRHxNqJttk":
        Script3();
        break;
      case "5uL39CKA9RK":
        Script4();
        break;
      case "5udcK1gXBtr":
        Script5();
        break;
      case "6DYzr6zHdwP":
        Script6();
        break;
      case "5ZODeytv9KF":
        Script7();
        break;
      case "5h6kwDaFUb6":
        Script8();
        break;
      case "6fg56m6yEpL":
        Script9();
        break;
      case "6SiDi1k19s1":
        Script10();
        break;
      case "5UvKcIlhQcY":
        Script11();
        break;
      case "64DWlNyYJMO":
        Script12();
        break;
      case "69kI7ILTfeO":
        Script13();
        break;
      case "6gUhs3rzxFK":
        Script14();
        break;
      case "6QhspAm6rnI":
        Script15();
        break;
      case "5kCvbce0zZM":
        Script16();
        break;
      case "5vF8jsmv5cY":
        Script17();
        break;
      case "6DyG6nOlAMk":
        Script18();
        break;
      case "6UtBMSEgpmW":
        Script19();
        break;
      case "6dbISatPDWW":
        Script20();
        break;
      case "5Zeqtnj6Lq4":
        Script21();
        break;
      case "6PwHriZB1BW":
        Script22();
        break;
      case "6K7b58ZfOeY":
        Script23();
        break;
      case "65TYlAN0C3J":
        Script24();
        break;
      case "5aeHnmY96fv":
        Script25();
        break;
      case "6cVxksM4pc7":
        Script26();
        break;
      case "5bhMSb8M58a":
        Script27();
        break;
      case "6lmJO48f1nb":
        Script28();
        break;
      case "6AnkYSUblMq":
        Script29();
        break;
      case "6kpjGxelUTt":
        Script30();
        break;
      case "60IL7FtYhgp":
        Script31();
        break;
      case "6c1LJuhA4rj":
        Script32();
        break;
      case "5lbtmaxdKB3":
        Script33();
        break;
      case "5oOr7tQMgJm":
        Script34();
        break;
      case "5ViDIItGayZ":
        Script35();
        break;
      case "5gbHyJbdnUO":
        Script36();
        break;
      case "61xCbx2X2Qb":
        Script37();
        break;
      case "6V0Cf2CP7Cz":
        Script38();
        break;
      case "5bcE6AtEcQY":
        Script39();
        break;
      case "6SIQqO3bMMa":
        Script40();
        break;
      case "6KoEnm3OioB":
        Script41();
        break;
      case "68HFtS02NIw":
        Script42();
        break;
      case "6AXIIfW23CM":
        Script43();
        break;
      case "6cb949Y9SDw":
        Script44();
        break;
      case "6FTNPN2dgz0":
        Script45();
        break;
      case "5g7ozWgDxmS":
        Script46();
        break;
      case "5wqIwD1qk5v":
        Script47();
        break;
      case "62hl8VNssvr":
        Script48();
        break;
      case "5XNivVEjZN0":
        Script49();
        break;
      case "6qzbEy2XE3H":
        Script50();
        break;
      case "6TPM02K0Sb9":
        Script51();
        break;
      case "6cCAMQKQUdN":
        Script52();
        break;
      case "5bFPF38lppG":
        Script53();
        break;
      case "5pCK0xKN9NE":
        Script54();
        break;
      case "6kmCb4I6K3S":
        Script55();
        break;
      case "5tPxXCycZBj":
        Script56();
        break;
      case "5uGtlU3MWis":
        Script57();
        break;
      case "5d3A2vg8qJH":
        Script58();
        break;
      case "5fOGz45e022":
        Script59();
        break;
      case "6gSlR5bCesE":
        Script60();
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
  const target = object('63XsXiOBZtv');
const duration = 250;
const easing = 'ease-in';
const id = '5Z0gCPK87rQ';
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
  const target = object('63XsXiOBZtv');
const duration = 250;
const easing = 'ease-in';
const id = '5Z0gCPK87rQ_reverse';
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
  const target = object('5z4KTLIhFUW');
const duration = 250;
const easing = 'ease-out';
const id = '6E82RFL3u1c';
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

window.Script4 = function()
{
  const target = object('5z4KTLIhFUW');
const duration = 250;
const easing = 'ease-out';
const id = '6E82RFL3u1c_reverse';
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
  const target = object('5y9A52mmoUJ');
const duration = 250;
const easing = 'ease-out';
const id = '5wv2LdQXD8a';
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

window.Script6 = function()
{
  const target = object('5y9A52mmoUJ');
const duration = 250;
const easing = 'ease-out';
const id = '5wv2LdQXD8a_reverse';
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
  const target = object('5rA34p49lEt');
const duration = 250;
const easing = 'ease-out';
const id = '6QmagbP2uAf';
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

window.Script8 = function()
{
  const target = object('5rA34p49lEt');
const duration = 250;
const easing = 'ease-out';
const id = '6QmagbP2uAf_reverse';
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
  const target = object('6KnXe31VrT0');
const duration = 250;
const easing = 'ease-out';
const id = '5vqwT90LLvU';
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

window.Script10 = function()
{
  const target = object('6KnXe31VrT0');
const duration = 250;
const easing = 'ease-out';
const id = '5vqwT90LLvU_reverse';
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
  const target = object('63r55cFTk1X');
const duration = 250;
const easing = 'ease-out';
const id = '6B2mejjNAo0';
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
  const target = object('63r55cFTk1X');
const duration = 250;
const easing = 'ease-out';
const id = '6B2mejjNAo0_reverse';
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

window.Script14 = function()
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

window.Script15 = function()
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

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
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

window.Script19 = function()
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

window.Script20 = function()
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

window.Script21 = function()
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

window.Script22 = function()
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

window.Script23 = function()
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

window.Script24 = function()
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

window.Script25 = function()
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

window.Script26 = function()
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

window.Script27 = function()
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

window.Script28 = function()
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

window.Script29 = function()
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

window.Script30 = function()
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

window.Script31 = function()
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

window.Script32 = function()
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

window.Script33 = function()
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

window.Script34 = function()
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

window.Script35 = function()
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

window.Script36 = function()
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

window.Script37 = function()
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

window.Script38 = function()
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

window.Script39 = function()
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

window.Script40 = function()
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

window.Script41 = function()
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

window.Script42 = function()
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

window.Script43 = function()
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

window.Script44 = function()
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

window.Script45 = function()
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

window.Script46 = function()
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

window.Script47 = function()
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

window.Script48 = function()
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

window.Script49 = function()
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

window.Script50 = function()
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

window.Script51 = function()
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

window.Script52 = function()
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

window.Script53 = function()
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

window.Script54 = function()
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

window.Script55 = function()
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

window.Script56 = function()
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

window.Script57 = function()
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

window.Script58 = function()
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

window.Script59 = function()
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

window.Script60 = function()
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
