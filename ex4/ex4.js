var startTime = Date.now();

class Box {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = "box";
        this.element.style.backgroundColor = this.constructor.randomColor();
    }
    static presetColors = ["red", "green", "blue", "yellow", "orange", "grey"];
    static randomColor() {
        return Box.presetColors[Math.floor(Math.random() * Box.presetColors.length)];
    }
}

class Container {
    constructor(element) {
        this.element = element;
    }
    generateBoxes(count) {
        const containerRect = this.element.getBoundingClientRect()
        console.log(containerRect.width)
        for (let i = 0; i < count; i++) {
            const box = new Box();
            this.element.appendChild(box.element);
            const boxStyle = getComputedStyle(box.element);
            const boxRect = {
                width: Number(boxStyle.width.replace("px", "")),
                height: Number(boxStyle.width.replace("px", "")),
            }
            box.element.style.top = `${Math.random() * (containerRect.height - boxRect.height)}px`;
            box.element.style.left = `${Math.random() * (containerRect.width - boxRect.width)}px`;
        }
    }
    deleteBox(element) {
        this.element.removeChild(element);
        console.log(this.element.children.length)
        if (this.element.children.length === 0) {
            var delta = (Date.now() - startTime) / 1000;
            alert("Last Child! Clear time: " + delta.toString() + "s");
        }
    }
}

//document.createElement("div", { id: "container" });

const find = (selector) => document.querySelector(selector);
const container = new Container(find("#container"));

container.element.addEventListener("mouseover", (e) => {
    if (e.target.className === "box") {
        container.deleteBox(e.target);
    }
});


const btnElement = find("#button");

btnElement.addEventListener("click", (e) => {
    container.generateBoxes(100);
    startTime = Date.now();
});
