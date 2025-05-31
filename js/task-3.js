const inputText = document.querySelector("input#name-input");
const spanName = document.querySelector("span#name-output");
inputText.addEventListener("input", () => {
    const name = inputText.value.trim();
    spanName.textContent = name === "" ? "Anonymous" : name;
})