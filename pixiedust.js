let clk,sw,tm
let min = 0
let sec = 0

const cls = () => {
	clearInterval(sw)
	clearInterval(clk)
	clearInterval(tm)
}
const clock = () => {
	cls()
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()
	clk = setInterval(() => {
		const date = new Date()
		$('#things').text(`${date.getHours()} : ${date.getMinutes()}`)
	},1000)
	
}
const stopwatch = (minx=0,secx=0) => {
	cls()
	$('input[value="stopwatch"]').hide()
	$('input[value="lap"]').show()
	$('input[value="stop"]').show()
	sw = setInterval(() => {
		$('#things').text(`${min} : ${sec}`)
		sec++
		if(sec==60){
			min++
			sec=0
		}
		
	},1000)
	
}
const lap = () => {
	
}
const stop = () => {
	clearInterval(sw)
	$('input[value="stop"]').hide()
	$('input[value="start"]').show()
}
const start = () => {
	$('input[value="stop"]').show()
	$('input[value="start"]').hide()	
	console.log(min+" "+sec)
	stopwatch()
}
const timer = () => {
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()	
}
const about = () => {
	$('input[value="stopwatch"]').show()
	$('input[value="lap"]').hide()
	$('input[value="stop"]').hide()	
}
$(document).ready(() =>{
	clock()
	$('input[value="clock"]').click(() => clock())
	$('input[value="stopwatch"]').click(() => stopwatch())
	$('input[value="timer"]').click(() => timer())
	$('input[value="about"]').click(() => about())
	$('input[value="lap"]').click(() => lap())
	$('input[value="stop"]').click(() => stop())
	$('input[value="start"]').click(() => start())
});

