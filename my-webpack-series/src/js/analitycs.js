function creadedAnalitycs() {
	let counter = 0;
	let isDectroed = false;


	const listener = () => counter++;

	document.addEventListener('click', listener);

	return {
		getstroy() {
			document.removeEventListener('click', listener);
			isDectroed = true;
		},

		getClicks() {
			if (isDectroed) {
				return 'Analitics is dectroed, total bind, hello world1';
			}
			return counter;
		}
	}
}

window.analitycs = creadedAnalitycs(); 