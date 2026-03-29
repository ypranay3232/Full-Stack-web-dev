function Draggable() {
    // first select the elements to which we apply js logic
    let lists = document.getElementsByClassName("list");
    let left = document.getElementsByClassName("left")[0];
    let right = document.getElementsByClassName("right")[0];
    let middle = document.getElementsByClassName("middle")[0];

    let selected = null;

    // loop the list draggable items so event listener applies to all 
    for (let list of lists) {
        list.addEventListener("dragstart", function(e) {
            selected = e.target;
        });
    }

    // now select where we apply draggable areas
    let boxes = [left, middle, right];

    for (let box of boxes) {
        // we have to preventDefault on dragover to allow dropping
        box.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        box.addEventListener("drop", function(e) {
            if (selected) {
                box.appendChild(selected);
                selected = null;
            }
        });
    }
}

Draggable();