document.querySelector("#input_event_input").addEventListener('input', e => {
     console.log('input', e.target.value);
     document.querySelector('#input_event_value').textContent = e.target.value;
});

document.querySelector("#change_event_input").addEventListener('change', e => {
     console.log('change', e.target.value);
     document.querySelector('#change_event_value').textContent = e.target.value;
});

const selectElement = document.querySelector('.ice-cream');
selectElement.addEventListener('change', (event) => { // it can be also input event
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

/**
input:
The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
change:
The change event is fired for <input>, <select>, and <textarea> elements when an alteration to
the element's value is committed by the user. Unlike the input event, the change event is not
necessarily fired for each alteration to an element's value

*/