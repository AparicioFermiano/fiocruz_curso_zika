var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});

function Nav() {
	var sidenav = document.getElementById("mySidenav");
	var marginRight = window.getComputedStyle(sidenav).getPropertyValue("margin-right");
	var btn = document.getElementById('btn-sidebar');
	if (marginRight === "-350px" || marginRight === "") {
		sidenav.style.marginRight = "0px";
		btn.className = btn.className.replace('btn-sidebar-light', 'btn-sidebar-dark');
	} else {
		sidenav.style.marginRight = "-350px";
		btn.className = btn.className.replace('btn-sidebar-dark', 'btn-sidebar-light');
	}
}

function flipCard(button) {
	var card = button.parentNode.parentNode;

	if (card.classList.contains('card-flipped')) {
		card.querySelector('#card_frente').classList.remove('d-none');
		card.querySelector('#card_verso').classList.add('d-none');
		card.classList.remove('card-flipped');
	} else {
		card.querySelector('#card_verso').classList.remove('d-none');
		card.querySelector('#card_frente').classList.add('d-none');
		card.classList.add('card-flipped');
	}
}

var progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', function() {
  	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  	var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  	var clientHeight = document.documentElement.clientHeight || window.innerHeight;
  	var percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  	progressBar.style.width = percent + '%';
});

