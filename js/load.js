// Just a loading box, that's it, coolio!
setInterval((console.log), 10000)

let ld = document.getElementById("loading-box")

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}