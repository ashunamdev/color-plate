const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selevtedElement) => {
    return window.getComputedStyle(selevtedElement).backgroundColor;
};

// console.log(getBGColor(orange));

// L37 Event

// var color = getBGColor(pink);

// pink.addEventListener("click",() => {
//     center.style.background = color;

// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter",() => {
        center.style.background = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(violet, getBGColor(violet));
