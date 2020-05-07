let btn = document.getElementById("button");
let changeColor = document.getElementById("box");
let finalColor = "";

btn.addEventListener("click", function() {
	let color = document.getElementById("input").value;
	let colorArray = Array.from(color);
	let display = document.getElementById("display");

		let filter1 = colorArray.filter((num) => {
		return (num >= "a" && num <= "f");
		});
		let filter2 = colorArray.filter((num) => {
			return (num >= "A" && num <= "F");
		});
		let filter3 = colorArray.filter((num) => {
			return (num >= "0" && num <= "9");
		});
		let filter = filter1.concat(filter2).concat(filter3);
		let filterLength = filter.length;

	if (colorArray[0] === "#" && colorArray.length === 7 && filterLength === 6){

		let convert = (colorArray) =>
		{
				for(i=1; i<colorArray.length; i++){
					colorArray[i] = parseInt(colorArray[i], 16);
				}
		}
		convert(colorArray);
		
		let r = ((colorArray[1]*16) + colorArray[2]);
		let g = ((colorArray[3]*16) + colorArray[4]);
		let b = ((colorArray[5]*16) + colorArray[6]);

		let rgb = `rgb(${r},${g},${b})`;

		display.innerText = `Here is your Converted Color Code : ${rgb}`;
		finalColor = rgb;
	}

	else if (color[0] === "r" && color[1] === "g" && color[2] === "b" && color[3] === "(" && color.length <= 16){
		let woRGB = color.replace("rgb", "");
		let woFB = woRGB.replace("(", "");
		let woLB = woFB.replace(")", "");
		let separatedColors = woLB.split(',');
		let red = separatedColors[0];
		let green = separatedColors[1];
		let blue = separatedColors[2];
			if (red < 256 && green < 256 && blue < 256){
				let hexa1 = (Math.floor(red/16)).toString(16);
				let hexa2 = (red%16).toString(16);
				let hexa3 = Math.floor(green/16).toString(16);
				let hexa4 = (green%16).toString(16);
				let hexa5 = (Math.floor(blue/16)).toString(16);
				let hexa6 = (blue%16).toString(16);
				let completeHexa = `#${hexa1}${hexa2}${hexa3}${hexa4}${hexa5}${hexa6}`;
				display.innerText = `Here is your Converted Color Code : ${completeHexa}`;
				finalColor = completeHexa;
			}
			else {display.innerText = `You have not entered a valid RGB Color Code. Enter a Valid RGB Code in the format : "rgb(col,col,col)"`;};
	}

	else {display.innerText = `The color code you've entered is invalid, please enter a Valid Color Code`};

	changeColor.style.backgroundColor = finalColor;
});