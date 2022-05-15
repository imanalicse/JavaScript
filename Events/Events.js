/**
 * The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
 * without waiting for stylesheets, images, and subframes to finish loading.
 */
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded and parsed');
});

/**
 * The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
 */
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

addEventListener('readystatechange', event => { });
addEventListener('beforeunload', event => { });