window.addEventListener('load',function() {
var text   = ['clime change is fake','fuck liberals','fuck them gays','4th of july','fuck employment!','fuck nature','fuck the brits','the brits stole our language!','PRAISE THE LORD!','All hail baby Jesus'];
var divs   = [ ];
var timers = [ ];

function show(n) {
    divs[n].style.display = 'block';
    divs[n].style.opacity = 1;
    divs[n].style.top = Math.floor((Math.random() * window.innerHeight * 0.9)) + 'px';
    divs[n].style.left = Math.floor((Math.random() * window.innerWidth * 0.9)) + 'px';
    divs[n].style.color = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
    setTimeout(function() { fade(n,1); },Math.floor(Math.random()*500));
}

function fade(n,k) {
    divs[n].style.opacity = k;
    if (k > 0) {
        setTimeout(function() { fade(n,k-0.1); },300);
    } else setTimeout(function() { show(n) },Math.floor(Math.random()*2500));
}

for (var i=0;i<text.length;++i) {
    var temp = document.createElement('div');
    temp.style.cssText = 'opacity: 0; position: fixed; font-size: 3em; text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black; font-family: "Impact"';
    temp.innerHTML = text[i];
    temp.setAttribute('id',i);
    document.body.appendChild(temp);
    divs.push(temp);
    timers.push(setTimeout((function(i) { return function() { show(i); } })(i),Math.floor(Math.random()*2500)));
}
},false);