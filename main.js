var $content = document.querySelector('.content');
var $body = document.querySelector('body');

var newContent = document.createElement('div');
newContent.setAttribute('class', 'content');


var text = $content.textContent;
var n = 0.7;
var trans = 'transition: ' + n + 's all cubic-bezier(0.550, 0.085, 0.680, 0.530); ';
var $input = document.querySelector('input');
var myColor = getColor($input.value);
var $label = document.querySelector('label.picker')


function getColor(str) {
  var color = str.substr(1, str.length);
  return parseInt(color, 16);
}



function setLabelColor(color) {
  $label.setAttribute('style', 'background: ' + color + ';');
}

$input.addEventListener('change', function(e) {
  myColor = getColor(this.value);
  setLabelColor(this.value);
});

for (var i = 0; i < text.length; i++) {
  var letter = text[i];
  var ele = document.createElement('span');
  ele.textContent = letter;
  ele.setAttribute('style', trans + 'color: ' + getColorTo(myColor));
  newContent.appendChild(ele);
}

var $body = document.querySelector('body');
$body.removeChild($content);
$body.appendChild(newContent);

function getColorTo (col) {
    var rand = Math.random();
    
    var colString = col.toString(16);
    var rString = '' + colString[0] + colString[1];
    var gString = '' + colString[2] + colString[3];
    var bString = '' + colString[4] + colString[5];

    var constant = 1;

    var R = parseInt(parseInt(rString, 16) * f(rand) * constant, 10);
    var G = parseInt(parseInt(gString, 16) * f(rand) * constant, 10);
    var B = parseInt(parseInt(bString, 16) * f(rand) * constant, 10);

    function f(x) {
      return (1 / (Math.pow(x, 1/10))) - 1;
    }

    rString = prefixZero(R.toString(16));
    gString = prefixZero(G.toString(16));
    bString = prefixZero(B.toString(16));

    var output = '#' + rString + gString + bString;

    return output;
}

function prefixZero(s) {
  if (s.length === 1) {
    return '0' + s;
  } else {
    return s;
  }
}

function reRender() {
  var childs = newContent.children;
  var len = childs.length;
  for (var i = 0; i < len; i++) {
    var child = childs[i];
    child.setAttribute('style', trans + 'color: ' + getColorTo(myColor));
  }
}

setInterval(reRender, n * 1000);