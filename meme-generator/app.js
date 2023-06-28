function setForms() {
	const makeMemeForm = document.querySelector('form[name="make-meme-form"]');

	const imgSrcForm = document.querySelector('form[name="img-src-form"]');
	const imgSrcInput = document.querySelector('input[name="img-src-input"]');
	const imgSrcSubmit = document.querySelector('input[name="img-src-submit"');

	const topTextInput = document.querySelector('input[name="top-text-input"');
	const bottomTextInput = document.querySelector(
		'input[name="bottom-text-input"'
	);

	const template = document.querySelector("#editing-meme");
	addListeners(
		makeMemeForm,
		imgSrcForm,
		imgSrcInput,
		imgSrcSubmit,
		topTextInput,
		bottomTextInput,
		template
	);
}

function addListeners(
	makeMemeSubmit,
	imgSrcForm,
	imgSrcInput,
	imgSrcSubmit,
	topTextInput,
	bottomTextInput,
	template
) {
	imgSrcForm.addEventListener("submit", function (event) {
		event.preventDefault();
		template.src = imgSrcInput.value;
	});

	makeMemeSubmit.addEventListener("submit", function (event) {
		console.log("ASFASF");
		makeNewMeme(event, bottomTextInput, topTextInput, template);
	});
}

function makeNewMeme(event, bottomTextInput, topTextInput, template) {
	if (
		bottomTextInput.value === "" ||
		topTextInput.value === "" ||
		template.src === ""
	) {
		return;
	}
	event.preventDefault();

	let pkg = [topTextInput.value, bottomTextInput.value, template.src];
	console.log(pkg);
	pkg = JSON.stringify(pkg);
	console.log(pkg);

	let memeList = [];
	console.log(memeList);
	if (localStorage.getItem("memeList")) {
		memeList = JSON.parse(localStorage.getItem("memeList"));
	}
	console.log(memeList);
	memeList.push(pkg);
	localStorage.setItem("memeList", JSON.stringify(memeList));
	console.log(localStorage.getItem("memeList"));

	topTextInput.value = "";
	bottomTextInput.value = "";
	template.src = "";
}
function main() {
	setForms();
}

main();

//I feel like this would be better done with a canvas.
//but if the spec calls for using divs, then that's what I'll use.
