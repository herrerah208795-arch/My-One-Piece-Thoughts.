console.log ("JavaScript is connected!");

const nav= document.querySelector("nav");

nav.addEventListener("mouseover", () => {
    nav.style.transform = "scale(1.25)";
    nav.style.transition = "transform 0.5s ease";
});
nav.addEventListener("mouseout", () => {
    nav.style.transform = "scale(1)";
    nav.style.transition = "transform 0.5s ease";
});

block.addEventListener("mouseenter", function() {
    block.style.transform = "scale(1.05)";
    document.querySelector("#bartolomew_kuma").src = block.dataset.image;
    document.querySelector("#content-headline").textContent = block.dataset.headline;
});

block.addEventListener("mouseleave", function() {
    block.style.transform = "scale(1)";
    document.querySelector("#bartolomew_kuma").src = selectorImage;
    document.querySelector("#content-headline").textContent = selectorHeadline;
});


block.addEventListener("click", function() {

    selectorImage = block.dataset.image;
    selectorHeadline = block.dataset.headline;

    count = count + 1;
    counter.textContent = count;

});
