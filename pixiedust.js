var things = document.getElementById('things');
var mm = document.getElementById('mm');
function clock(){
	setInterval(clk,1000);
}
function clk(){
	function r(n){
		if(n<10){
			return "0"+n;
		}
		else{
			return n;
		}
	}
	var d = new Date();
	things.innerHTML = ((d.getHours()>12) ? r(d.getHours()-12) : r(d.getHours())) + " : " + r(d.getMinutes()) + ' ' + ((d.getHours()>12) ? 'PM' : 'AM');
}
function stopwatch(){
	var e = document.getElementById('sw');
	
	setInterval(sw,1000);
}
var i=0,j=0,k=0;
function sw(){
	things.innerHTML = i + " : " + j + " : " + k;
	k++;
	if(k==60){
		k=0;
		j++
	}
	
	if(j==60){
		j=0;
		i++;
	}
}