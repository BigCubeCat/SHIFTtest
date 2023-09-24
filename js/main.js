/*
 * function SearchName()
 * Get input with "search" id and highlight elements with "name" class
 * (Compare by "BlockContent"-class element content)
*/
function SearchName() {
    let found = false;
    const searchElement = document.getElementById("search");
    const searchPattern = searchElement.value.toLowerCase();
    const nameElements = document.getElementsByClassName("name");
    for (var i = 0; i < nameElements.length; ++i) {
        const nameElement = nameElements[i];
        const content = nameElement.getElementsByClassName("BlockContent")[0];
        if (content.innerHTML.toLowerCase() === searchPattern) {
            found = true;
            nameElement.style.background = "var(--primary-color)";
            nameElement.style.color = "var(--stroke-color)";
            nameElement.style.fontWeight = 700;
        } else {
            nameElement.style.background = "var(--main-color)";
            nameElement.style.color = "var(--stroke-color)";
            nameElement.style.fontWeight = 400;
        }
    }
    const notFoundComponent = document.getElementById("not-found");
    if (found) {
        notFoundComponent.style.display = "none";
    } else {
        notFoundComponent.style.display = "block";
    }
}
