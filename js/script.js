var morse = function (sentence, type) {
	var sentence = sentence.toLowerCase();
	var morseABC = {
		".-":"a",    "-...":"b",    "-.-.":"c",   "-..":"d",
		".":"e",     "..-.":"f",    "--.":"g",    "....":"h",
		"..":"i",    ".---":"j",    "-.-":"k",    ".-..":"l",
		"--":"m",    "-.":"n",      "---":"o",    ".--.":"p",
		"--.-":"q",  ".-.":"r",     "...":"s",    "-":"t",
		"..-":"u",   "...-":"v",    ".--":"w",    "-..-":"x",
		"-.--":"y",  "--..":"z",    "-...-":" ",

		".----":"1", "..---":"2", "...--":"3",
		"....-":"4", ".....":"5", "-....":"6",
		"--...":"7", "---..":"8", "----.":"9",
		"-----":"0",

		"--..--":"!",
	}

	var ABCmorse = {
		"a":".-",    "b":"-...",    "c":"-.-.",   "d":"-..",
		"e":".",     "f":"..-.",    "g":"--.",    "h":"....",
		"i":"..",    "j":".---",    "k":"-.-",    "l":".-..",
		"m":"--",    "n":"-.",      "o":"---",    "p":".--.",
		"q":"--.-",  "r":".-.",     "s":"...",    "t":"-",
		"u":"..-",   "v":"...-",    "w":".--",    "x":"-..-",
		"y":"-.--",  "z":"--..",    " ":"-...-",

		"1":".----", "2":"..---", "3":"...--",
		"4":"....-", "5":".....", "6":"-....",
		"7":"--...", "8":"---..", "9":"----.",
		"0":"-----",

		"!":"--..--", 
	}

	if (type == "morse") {
		var ss = sentence.replace(/\s+/g, ' ').trim().split(" ");

		var createdSentence = "";
		try {
			for (i in ss) {
				createdSentence += morseABC[ss[i]];
			}
		} catch (e) {
			var createdSentence = "Wrong inputted value!";
		}
	} else if (type == "abc") {
		var ss = sentence.split("");

		var createdSentence = "";
		for (i in ss) {
			createdSentence += ABCmorse[ss[i]] + " ";
		}
	} else {
		var createdSentence = "Unknown type!";
	}

	return createdSentence;
}

var mySentence = "Hello World!";
var myMorse = ".... . .-.. .-.. --- -...- .-- --- .-. .-.. -.. --..--";
console.log(morse(mySentence, "abc"));
console.log(morse(myMorse, "morse"));