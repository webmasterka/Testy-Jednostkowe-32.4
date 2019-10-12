const formatDate = (timeInSeconds) => {
	let hours = Math.floor(timeInSeconds / 3600);
	let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
	let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

	if(!timeInSeconds) { return "0s"}
	if(hours < 1) {hours = "";}
	if(hours >= 1 && (minutes >= 1 || seconds >= 1)) {hours = hours + "h ";}
	if(hours >= 1 && minutes < 1) {hours = hours + "h";}
	if(minutes < 1) {minutes = "";}
	if(minutes >= 1 && seconds >= 1) {minutes = minutes + "m ";}
	if(minutes >= 1 && seconds < 1) {minutes = minutes + "m";}
	if(seconds <  1) {seconds = "";}
	if(seconds >=  1) {seconds = seconds + "s";}


	return `${hours}${minutes}${seconds}`;
}

module.exports = formatDate;

function checkTime(hours, minutes, seconds) {
	
}