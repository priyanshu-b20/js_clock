let clk = null

const clock = () => {
	clk = setInterval(() => {
		const date = new Date()
		$('#things').text(`${date.getHours()} : ${date.getMinutes()}`)
	},1000)
	
}
const stopwatch = () => {
	let min = 0
	let sec = 0
	console.log('hello')
	clearInterval(clk)
	setInterval(() => {
		$('#things').text(`${min} : ${sec}`)
		sec++
		if(sec==60){
			min++
			sec=0
		}
		
	},1000)
	
}

$(document).ready(() =>{
	clock()
	$('input[value="stopwatch"]').click(() => clock())
	$('input[value="stopwatch"]').click(() => stopwatch())

});

