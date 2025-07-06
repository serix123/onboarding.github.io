function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ECGFFfAlUX":
        Script1();
        break;
      case "5cCFXd3WnXo":
        Script2();
        break;
      case "5mGu0HuhRsg":
        Script3();
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
  const target = object('5ewwHwd7v7n');
const duration = 500;
const easing = 'ease-out';
const id = '6DcrwZB3OBT';
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

window.Script2 = function()
{
  const target = object('6EDdyNBupBL');
const duration = 250;
const easing = 'ease-out';
const id = '5wklmJziHLF';
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

window.Script3 = function()
{
  const target = object('6EDdyNBupBL');
const duration = 250;
const easing = 'ease-out';
const id = '5wklmJziHLF_reverse';
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
