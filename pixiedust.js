var things = document.getElementById('things');
var mm = document.getElementById('mm');
setInterval(clock,1000);
function clock(){
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
