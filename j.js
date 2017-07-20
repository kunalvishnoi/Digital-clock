document.body.onload = clock();

function clock()
{
      


var n = new Date();   
        var h = n.getHours();
        var m = n.getMinutes();
        var s = n.getSeconds();

 


         document.getElementById('hour').innerHTML = h + ":" + m;
        document.getElementById('sec').innerHTML =":"+ s;

if(h<12)
{
	document.getElementById('no').innerHTML="AM";
}
else{
	document.getElementById('no').innerHTML="PM";
}



setInterval('clock()', 1000);
}

 