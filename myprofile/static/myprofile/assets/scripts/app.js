
const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "API",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 5
			}, {
				text: "jquery",
				weight: 4
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "Python",
				weight: 15
			}, {
				text: "Excel",
				weight: 9
			}, {
				text: "VBA",
				weight: 15
			}, {
				text: "SQL",
				weight: 7
			}, {
				text: "Django",
				weight: 15
			}, {
				text: "Pandas",
				weight: 7
			}, {
				text: "Selenium",
				weight: 10
			}, {
				text: "Automation",
				weight: 7
			}, {
				text: "Trading",
				weight: 15
			}, {
				text: "Regex",
				weight: 7
			}

		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 550});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 1000; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "solve problems with code.", "streamline daily tasks.", "also teach programming to people.", "can help YOU!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();




var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}