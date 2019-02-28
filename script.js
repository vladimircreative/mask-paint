// find color control sliders
const hue = document.querySelector("#hue");	
const sat = document.querySelector("#sat");
const bri = document.querySelector("#bri");

// init settings of color filters
let color_value = document.querySelector("#color-value");

// function to control color filters via sliders and update color_value
const source = document.querySelector("#source");
const setColor = () => {
	let filter = (
		"hue-rotate(" + hue.value + "deg) " + 
		"grayscale(" + sat.value + "%)" + 
		"brightness(" + bri.value + "%)"
		)
	color_value.innerHTML = [hue.value, sat.value, bri.value].join(", ");
	source.style.filter = filter;
	return filter;
}

// ------------------------ START HERE
setColor();

// attach function to each slider
[hue, sat, bri].map((element) => element.oninput = () => setColor())

// find all texture elements and let them change texture image applied to the visor image
const textureImage = document.querySelector("#texture");
const availableTextures = document.querySelectorAll(".texture");
availableTextures.forEach((element) => {
	const me = element.src;
	element.onclick = () => textureImage.src = me;
});

// colorize colorboxes
const colorboxes = document.querySelectorAll(".colorbox");
const available_styles = [[1, 1, 100], [326, 31, 60], [40, 51, 60], [1, 100, 20]].reverse();
colorboxes.forEach((element, i) => {
	const me = i;

	[hue.value, sat.value, bri.value] = available_styles[me]
	element.style.filter = setColor();

	// attach function to each color box
	element.onclick = () => {
		[hue.value, sat.value, bri.value] = available_styles[me];
		setColor();
		console.log(available_styles[me])
	};
})
//texture_element.src = available_textures[0];
