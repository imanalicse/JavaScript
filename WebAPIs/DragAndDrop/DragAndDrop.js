let dragged;
/* events fired on the draggable target */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging......");
});

source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");

  // event.dataTransfer.setData("text/plain", event.target.innerText)
  // event.dataTransfer.dropEffect = "copy"
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
    console.log('dragover');
  // prevent default to allow drop
  event.preventDefault();
}, false);

target.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  console.log('dragenter');
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
    console.log('dragleave');
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
    console.log('drop');
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});