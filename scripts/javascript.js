/* document.getElementById("send").onclick = function () {
	myFunction();
};

function myFunction() {
	document.getElementById("sent").innerHTML = "Your message has been sent";
} */

function randomize_heading() {
	let quote_list = [
		"'You miss 100% of the shots you don’t take. - Wayne Gretzky' - Michael Scott",
		"I’m an early bird and I’m a night owl so I’m wise and I have worms.",
		"I love inside jokes. I hope to be a part of one someday.",
		"You know what they say. Fool me once, strike one, but fool me twice.. .. ...strike three.",
		"I'm not superstitious, but I am a little stitious.",
		"I am Beyoncé, always.",
		"Do I have a special someone? Well, yeah, of course. A bunch of ’em. My employees.",
		"They say on your deathbed you never wish you spent more time at the office — but I will.",
		"Make friends first, make sales second, make love third. In no particular order.",
		"And I’m optimistic because every day I get a little more desperate.",
		"The people that you work with are, when you get down to it, your very best friends.",
		"Webster’s Dictionary defines wedding as ‘the fusing of two metals with a hot torch.'",
		"We’re all homos. Homo… Sapiens.",
		"It’s never too early for ice cream.",
		"Don’t ever, for any reason, do anything to anyone, for any reason, ever, no matter what.",
		"It takes an advanced sense of humor. I don’t expect everyone to understand.",
	];
	let quote = quote_list[Math.floor(Math.random() * quote_list.length)];
	document.getElementById("carousel_text").textContent = quote;
	setTimeout(randomize_heading, 7500);
}
randomize_heading();
