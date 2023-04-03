const body = document.body;
const searchBox = document.getElementById("search_box");
const searchButton = document.getElementById("search_button");

body.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        searchStuff();
    }
});

searchButton.addEventListener("click", searchStuff);

function searchStuff() {
    const input = searchBox.value;
    window.location.href = "https://" + input + ".com";
}







