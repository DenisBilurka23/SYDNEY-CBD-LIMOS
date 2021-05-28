const toggler = document.querySelector('.customToggler')
const items = document.querySelector('.items')
const logo = document.querySelector('.logo')
const logoText = document.querySelector('.logoText__line-2')
const navbar = document.querySelector('.wrapper')
const vehicleSelectorDown = document.querySelector('.vehicleSelect__Arrow-Down')
const vehicleSelectorUp = document.querySelector('.vehicleSelect__Arrow-Up')
const vehicleTypeSelection = document.querySelector('.vehicleSelect__selected')
const vehicleDropMenu = document.querySelector('.dropMenu')

const state = {
	active: false,
	activeVehicles: false
}

vehicleSelectorDown.display = 'none'
toggler.onclick = () => {
	state.active = !state.active
	items.classList.toggle('active')
	logoText.classList.toggle('active')
	navbar.classList.toggle('active')
	if (state.active) {
		toggler.className = 'customToggler fas fa-times' 
		logo.src = 'images/logo.png'
		vehicleSelectorDown.display = 'none'
		vehicleSelectorUp.display = 'block'
	} else {
		toggler.className = 'customToggler fas fa-bars'
		logo.src = 'images/logo_dark.png'
	}
}
vehicleTypeSelection.onclick = () => {
	state.activeVehicles = !state.activeVehicles

	if (state.activeVehicles) {
		vehicleSelectorDown.style.display = 'none'
		vehicleSelectorUp.style.display = 'block'
		vehicleDropMenu.style.display = 'block'
	} else {
		vehicleSelectorDown.style.display = 'block'
		vehicleSelectorUp.style.display = 'none'
		vehicleDropMenu.style.display = 'none'
	}
}







