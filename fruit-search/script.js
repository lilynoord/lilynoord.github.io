import { fruit } from "./fruit-index.js";
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

function search(str) {
	let results = fruit.filter((arr) =>
		arr.toLowerCase().includes(str.toLowerCase())
	);

	return results;
}

function searchHandler(e) {
	showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
	const currentList = document
		.querySelectorAll("li")
		.forEach((a) => a.remove());
	results.forEach((fruity) => {
		const newItem = document.createElement("li");
		newItem.name = fruity;
		newItem.innerText = fruity;
		suggestions.append(newItem);
	});
	if (input.value === "") {
		const currentList = document
			.querySelectorAll("li")
			.forEach((a) => a.remove());
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	const currentList = document
		.querySelectorAll("li")
		.forEach((a) => a.remove());
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
