/**
The Element.after() method inserts a set of Node or string objects in the children list of the Element's parent,
just after the Element. String objects are inserted as equivalent Text nodes.

Syntax:
after(node1)
after(node1, node2)
after(node1, node2, ... , nodeN)
*/

/** Inserting an element */
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");
p.after(span);
console.log(container.outerHTML);
// "<div><p></p><span></span></div>"

/** Inserting text */
container = document.createElement("div");
p = document.createElement("p");
container.appendChild(p);
span = document.createElement("span");
p.after(span, "Text");
console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"

/** Inserting an element and text */
container = document.createElement("div");
p = document.createElement("p");
container.appendChild(p);
span = document.createElement("span");
p.after(span, "Text");
console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
