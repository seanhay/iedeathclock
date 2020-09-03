const endDate = new Date("2021-08-17")
let counterBox = document.getElementById("counter")
let bgBox = document.getElementById("bg")

setTimerObj()

setInterval(() => {
	// counterBox.textContent = `${timeDiff.years}/${timeDiff.months}/${timeDiff.days}/${timeDiff.hours}/${timeDiff.minutes}/${timeDiff.seconds}/${timeDiff.ms}`
	// counterBox.innerHTML = ""
	setTimerObj();
}, 1000)

// let nowDate = new Date()
// let timeDiff = countdown(nowDate, endDate)
// console.log(timeDiff)

function setTimerObj() {
	let nowDate = new Date()
	let timeDiff = countdown(nowDate, endDate)
	for (const [key, value] of Object.entries(timeDiff)) {
		let val = '' ? '0' : value
		let bgContainer = document.querySelector(`.bg-${key}`)
		let container = document.querySelector(`.${key}`)
		console.log(`.bg-${key}`)
		if (container.textContent != val)
			container.textContent = val
			bgContainer.style.setProperty('--timeVal', val);
		//counterBox.innerHTML += `<span class="${key}" data-key="${key}">${value}</span>`
	}
}


function countdown(fromDate, targetDate) {
	let fromTime = fromDate.getTime()
	let toTime = targetDate.getTime()
	let duration = toTime - fromTime
	let years = Math.floor(duration / 3.154e+10)
	let durationMinusYears = duration - (years * 3.154e+10)
	let months = Math.floor(duration / 2.628e+9) % 12
	let durationMinusMonths = durationMinusYears - (months * 2.628e+9)
	let days = Math.floor(durationMinusMonths / 8.64e+7)
	let hours = Math.floor(duration / 3.6e+6) % 24
	let mins = Math.floor(duration / 60000) % 60
	let secs = Math.floor(duration / 1000) % 60
	let ms = String(Math.floor(duration) % 1000).padStart(2, '0')

	return { "years": years, "months": months, "days": days, "hours": hours, "minutes": mins, "seconds": secs }
}