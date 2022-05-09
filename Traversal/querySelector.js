/**
 * Document.querySelector()
 * The Document method querySelector() returns the first Element within the document that matches the specified selector,
 * or group of selectors. If no matches are found, null is returned.
 *
 */

// Finding the first element matching a class
var el = document.querySelector(".myclass");

// A more complex selector
var el = document.querySelector("div.user-panel.main input[name='login']");

// Negation
var el = document.querySelector("div.user-panel:not(.main) input[name='login']");