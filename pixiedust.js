var clk = document.getElementById('clock');
setInterval(clock,1000);
function clock(){
	var d = new Date();
	clk.innerHTML = ((d.getHours()>12) ? d.getHours()-12 : d.getHours()) + " : " + d.getMinutes(); //+ " " + ((d.getHours()>12) ? 'PM' : 'AM');
}

