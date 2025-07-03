function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bWmsmaYGiC":
        Script1();
        break;
      case "65RzV7LjARH":
        Script2();
        break;
      case "6HDRiyW3bxF":
        Script3();
        break;
      case "6NsneIl6kYZ":
        Script4();
        break;
      case "6Hk2f2PKERF":
        Script5();
        break;
      case "5XLSEwZP7DT":
        Script6();
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

window.Script4 = function()
{
  const target = object('6Vy25gWyEdh');
const duration = 500;
const easing = 'ease-out';
const id = '6a0MJFR0AlV';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6LhymDZAQZ6');
const duration = 500;
const easing = 'ease-out';
const id = '6a0MJFR0AlV';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5fGUPJOXVfs');
const duration = 500;
const easing = 'ease-out';
const id = '5bcPct8C6IN';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
