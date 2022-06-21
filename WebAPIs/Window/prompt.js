/**
window.prompt() instructs the browser to display a dialog with an optional message prompting the user
to input some text, and to wait until the user either submits the text or cancels the dialog.

Syntax:
    prompt()
    prompt(message)
    prompt(message, default)
 */

let sign = prompt("What's your sign?");
if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
