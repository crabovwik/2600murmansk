

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-6227584-29']);
  _gaq.push(['_setDomainName', '.2600.nl']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function animate(canvas, lastTime)
{
    var g = Math.round(Math.random() * 255);
    context.strokeStyle = "rgba(0, " + g + ", 0, 0.25)";
    var d2 = Math.pow(2, Math.round(Math.random() * 8));
    var r = Math.random() * Math.PI*2;
    context.rotate(r);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(l,0);
    context.stroke();
    context.closePath();

    // update
    var date = new Date();
    var time = date.getTime();
    var timeDiff = time - lastTime;
    //animate(canvas, balls, timeDiff, mousePos);
    lastTime = time;

    requestAnimFrame(function(){
        animate(canvas, timeDiff);
    });
}

window.onload = function()
{
    var canvas = document.getElementById("radial");

    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    var width = Math.max( body.scrollWidth, body.offsetWidth, 
                           html.clientWidth, html.scrollWidth, html.offsetWidth );
    
    canvas.width = width;
    canvas.height = height;

    x = Math.floor(canvas.width / 2);
    y = Math.floor(canvas.height / 2);
    l = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));

    context = canvas.getContext("2d");
    context.translate(x,y);

    var date = new Date();
    var time = date.getTime();
    animate(canvas, time);
};

