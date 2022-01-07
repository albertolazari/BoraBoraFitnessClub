function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}
	else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
}

window.onload= function(){
	toggleSwitch = document.querySelector('#darkmode-switch input[type="checkbox"]');
	toggleSwitch.addEventListener('change', switchTheme);

	if(localStorage.getItem('theme') == null){
		window.localStorage.setItem('theme', 'light');
	}

	if(localStorage.getItem('theme')=='light'){
		document.documentElement.setAttribute('data-theme', 'light');	
	}
	else{
		console.log('qui');
		document.documentElement.setAttribute('data-theme', 'dark');
		toggleSwitch.checked = true;
	}

	//per il menu a comparsa
	window.sessionStorage.setItem('menuDisplay', 'no');
}		

function menuClickEvent(){
	if(sessionStorage.getItem('menuDisplay') == 'yes'){
		window.sessionStorage.setItem('menuDisplay', 'no');
		document.getElementById("menu").style.display = "none";
	}
	else {
		window.sessionStorage.setItem('menuDisplay', 'yes');
		document.getElementById("menu").style.display = "block";
	}
}