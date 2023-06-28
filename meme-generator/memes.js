function buildMeme(pkg, i) {
	pkg = JSON.parse(pkg);
	console.log(pkg);
	let topTextValue = pkg[0];
	let bottomTextValue = pkg[1];
	let templateSrc = pkg[2];

	console.log(topTextValue, bottomTextValue, templateSrc);
	const topText = document.createElement("div");

	topText.innerText = topTextValue;
	topText.classList.add("top-text");
	const img = document.createElement("img");
	img.classList.add("meme-view");
	img.src = templateSrc;
	const bottomText = document.createElement("div");
	bottomText.innerText = bottomTextValue;
	bottomText.classList.add("bottom-text");
	topText.classList.add("meme-text");
	bottomText.classList.add("meme-text");
	const newMeme = document.createElement("div");
	newMeme.classList.add("viewport");
	console.log(topText);
	newMeme.append(topText);
	newMeme.append(img);
	newMeme.append(bottomText);

	const delForm = document.createElement("form");
	const delButton = document.createElement("input");
	delButton.type = "submit";
	delButton.value = "Delete Meme";
	delButton.name = "del-button";
	delForm.append(delButton);
	delForm.addEventListener("submit", function (event) {
		delForm.parentNode.remove();
		const memeList = JSON.parse(localStorage.getItem("memeList"));
		console.log(memeList);
		memeList.splice(i, 1);
		console.log(memeList);
		localStorage.setItem("memeList", JSON.stringify(memeList));
	});
	newMeme.append(delForm);
	document.querySelector("ul").append(newMeme);
}

function main() {
	const memeList = JSON.parse(localStorage.getItem("memeList"));
	console.log(memeList);
	for (let i = 0; i < memeList.length; i++) {
		console.log(i);
		buildMeme(memeList[i], i);
	}
}

main();
