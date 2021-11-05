let DataVizLink = document.querySelector('#DataViz-link');
let WeafoLink = document.querySelector('#Weafo-link');
let StocksLink = document.querySelector('#Stocks-link');
let CovidLink = document.querySelector('#Covid-link');
let Audio_analyzerLink = document.querySelector('#Audio_analyzer-link');
let CryptocurrencyLink = document.querySelector('#Cryptocurrency-link');
let Iron_oreLink = document.querySelector('#Iron_ore-link');
let teamLink = document.querySelector('#team-link');

let linkArray = [DataVizLink, WeafoLink, StocksLink, CovidLink, Audio_analyzerLink, CryptocurrencyLink, Iron_oreLink, teamLink];

linkArray.forEach((eachLink) => {
	eachLink.addEventListener('click', (e) => {
		switch (eachLink) {
			case DataVizLink:
				fetchPage(eachLink, 'DataViz.html');
				break;

			case WeafoLink:
				fetchPage(eachLink, 'Weafo.html');
				break;

			case StocksLink:
				fetchPage(eachLink, 'Stocks.html');
				break;

			case CovidLink:
				fetchPage(eachLink, 'Covid.html');
				break;

			case Audio_analyzerLink:
				fetchPage(eachLink, 'Audio_analyzer.html');
				break;
				
			case CryptocurrencyLink:
				fetchPage(eachLink, 'Cryptocurrency.html');
				break;

			case Iron_oreLink:
				fetchPage(eachLink, 'ironore.html');
				break;

			case teamLink:
				fetchPage(eachLink, 'team.html');
				break;
		}
	})
})

function fetchPage(link, page) {
	let baseURL = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.port) {
		baseURL += `:${window.location.port}`;
	}

	fetch(`${baseURL}/${page}`)
		.then(function(response) {
			return response.text()
		})
		.then(function(html) {
			let doc = new DOMParser().parseFromString(html, "text/html");

			anime({
				targets: '.text-section h1, .text-section p, .text-section div',
				translateX: 700,
				opacity: 0,
				easing: 'easeInExpo',
				duration: 700,
				complete: (anim) => {
					document.querySelector('.column-wrapper').remove();
				}
			})

			setTimeout(function () {
				document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

				anime({
					targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
					translateX: [-600, 0],
					delay: (el, i) => 100 * i,
					opacity: [0, 1],
					easing: 'easeOutExpo',
				})
			}, 700);
		})
}