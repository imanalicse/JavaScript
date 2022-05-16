let selector = document.querySelector("#test");
/** This handler will be executed only once when the cursor moves over the element */
selector.addEventListener('mouseenter', event => {
     console.log('mouseenter');
     event.target.style.border = '2px solid green';
});

selector.addEventListener('mouseleave', event => {
    console.log('mouseleave');
    event.target.style.border = 'none';
});

/** mouseover: Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children. */
selector.addEventListener('mouseover', event => {
 console.log('========Mouseover===========');
 console.log('target', event.target)
 console.log('currentTarget', event.currentTarget)
 console.log('relatedTarget', event.relatedTarget);
  event.target.border = '1px solid green';
  console.log('-----------------');
});

selector.addEventListener('mouseout', event => {
 console.log('mouseout');
});

/*

// Mouse events:
addEventListener('contextmenu', event => { });
addEventListener('mouseenter', event => { });

addEventListener('mouseleave', event => { });


addEventListener('mousemove', event => { });
addEventListener('mouseover', event => { });
*/