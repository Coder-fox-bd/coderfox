const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Bootstrap",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "PHP",
				weight: 12
			}, {
				text: "HTML",
				weight: 7
			}, {
				text: "MySQL",
				weight: 8
			},{
				text: "django",
				weight: 10
			}, {
				text: "jQuery",
				weight: 9
			}, {
				text: "PYTHON",
				weight: 15
			}, {
				text: "SQLite",
				weight: 7.5
			}, {
				text: "Laravel",
				weight: 11
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	return {
		displayWordCloud: displayWordCloud
	}

}();


Portfolio.displayWordCloud();
