/**
The DOM MutationObserver() constructor — part of the MutationObserver interface —
creates and returns a new observer which invokes a specified callback when DOM events occur.

DOM observation does not begin immediately; the observe() method must be called first to establish
which portion of the DOM to watch and what kinds of changes to watch for.
*/
const targetNode = document.getElementById("editor")
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
const observer = new MutationObserver(function(mutations, observer) {
    console.log('mutations', mutations);
    console.log('observer', observer);
    mutations.forEach((mutation) => {
        switch(mutation.type) {
             case 'childList':
                /* One or more children have been added to and/or removed from the tree.
                (See mutation.addedNodes and mutation.removedNodes.) */
                targetNode.style.backgroundColor = '#ccc';
             break;
             case 'attributes':
                /* An attribute value changed on the element in mutation.target.
                The attribute name is in mutation.attributeName,
                and its previous value is in mutation.oldValue. */
            break;
        }
    });
});

observer.observe(targetNode, {
  childList: true,
  subtree: true,
  attributes: true,
});

function changeContent() {
    const p = document.createElement('p');
    p.textContent = 'Hi Nepchun';
    document.getElementById("editor").append(p)
}
function stopObserver() {
    observer.disconnect();
}