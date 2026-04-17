const cavalos = ["hor", "se", "cavalo"];
for (Element of cavalos){
    console.log(Element);
}

const horsegalloping = new Audio("sounds/horse-galloping.mp3");
const horseneigh = new Audio("sounds/horse-roar.mp3");
function changeTitle() {
    const h1 = document.getElementById("id1");
    h1.innerHTML = "Titulo cavalo foda";
    h1.classList.add("title-change");
    setTimeout(() => h1.classList.remove("title-change"), 1000);

    // Play galloping sound, then neigh after 4 seconds
    horsegalloping.currentTime = 0; // Reset to start
    horsegalloping.volume = 0.5;
    horsegalloping.play();

    setTimeout(() => {
        horseneigh.currentTime = 0;
        horseneigh.volume = 0.7;
        horseneigh.play();
    }, 4000);
}
