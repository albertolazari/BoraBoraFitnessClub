/* Feature Detection --------------------------------- */

let passiveSupported = false;

try {
	const options = {
		get passive() {
			passiveSupported = true;
			return false;
		},
	};

	window.addEventListener("test", null, options);
	window.removeEventListener("test", null, options);
} catch (err) {
	passiveSupported = false;
}

function menuClickEvent() {
	if (sessionStorage.getItem("menuDisplay") == "yes") {
		window.sessionStorage.setItem("menuDisplay", "no");
		document.getElementById("menu").style.display = "none";
	} else {
		window.sessionStorage.setItem("menuDisplay", "yes");
		document.getElementById("menu").style.display = "block";
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		document.getElementById("darkmode-switch-wrapper").title = "Passa a modalità giorno";
		document.getElementById("darkmode-switch-wrapper").ariaLabel = "Passa a modalità giorno";
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
		document.getElementById("darkmode-switch-wrapper").title = "Passa a modalità notte";
		document.getElementById("darkmode-switch-wrapper").ariaLabel = "Passa a modalità notte";
	}
}

function initDarkMode() {
	toggleSwitch = document.querySelector(
		'#darkmode-switch input[type="checkbox"]'
	);
	toggleSwitch.addEventListener("change", switchTheme);

	if (localStorage.getItem("theme") == null) {
		window.localStorage.setItem("theme", "light");
	}

	if (localStorage.getItem("theme") == "light") {
		document.documentElement.setAttribute("data-theme", "light");
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		toggleSwitch.checked = true;
	}
}

function showAddEsercizioForm() {
	document.getElementById("eliminaEsercizioForm").style.display = "none";
	document.getElementById("aggiungiEsercizioForm").style.display = "block";
}

function showDeleteEsercizioForm() {
	document.getElementById("aggiungiEsercizioForm").style.display = "none";
	document.getElementById("eliminaEsercizioForm").style.display = "block";
}

window.onload = function () {
	initDarkMode();

	//Nasconde subito il torna su
	document.getElementById("tornaSu").style.display = "none";

	//per il menu a comparsa
	window.sessionStorage.setItem("menuDisplay", "no");
};

//Torna su
window.addEventListener(
	"scroll",
	function () {
		tornaSu = document.getElementById("tornaSu");
		if (
			document.body.scrollTop > 300 ||
			document.documentElement.scrollTop > 300
		) {
			tornaSu.style.display = "block";
		} else {
			tornaSu.style.display = "none";
		}
	},
	passiveSupported ? { passive: true } : false
);
