/* document.addEventListener("DOMContentLoaded", function () {
	el_autohide = document.querySelector(".autohide");

	// add padding-top to bady (if necessary)
	navbar_height = document.querySelector(".navbar").offsetHeight;
	// document.body.style.paddingTop = navbar_height + "px"; 

	if (el_autohide) {
		var last_scroll_top = 0;
		window.addEventListener("scroll", function () {
			let scroll_top = window.scrollY;
			if (scroll_top < last_scroll_top) {
				el_autohide.classList.remove("scrolled-down");
				el_autohide.classList.add("scrolled-up");
			} else {
				el_autohide.classList.remove("scrolled-up");
				el_autohide.classList.add("scrolled-down");
			}
			last_scroll_top = scroll_top;
		});
		// window.addEventListener
	}
	// if
});
// DOMContentLoaded  end
 */
/* $(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on("click", function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});
 */

/* document.getElementById("send").addEventListener("click", show_sent);
function show_sent() {
	document.getElementById("sent").innerHTML = "Your message has been sent.";
}
 */

document.getElementById("send").onclick = function () {
	myFunction();
};

function myFunction() {
	document.getElementById("sent").innerHTML = "Your message has been sent";
}
/* function validateForm() {
	var a = document.getElementById("name");
	var b = document.getElementById("email");
	var d = document.getElementById("message");
	if ((a == null || a == "", b == null || b == "", d == null || d == "")) {
		document.getElementById("valuereqd").innerHTML = "Required Field";
	}
}
 */
