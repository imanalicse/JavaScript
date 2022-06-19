/**
 * https://javascript.plainenglish.io/how-to-detect-the-closing-of-a-browser-tab-94eee00a4e39
 */

const isPageReloaded = window.performance
                 .getEntriesByType('navigation')
                 .map(nav => nav.type)
                 .includes('reload');

console.log('isPageReloaded ', isPageReloaded)
window.onbeforeunload = function () {
  return "aaa"
  // isBrowserClosed();
}

function isBrowserClosed() {
  var localStorageTime = parseInt(localStorage.getItem('storageTime'));
  var currentTime = new Date().getTime();
  var timeDifference = currentTime - localStorageTime;
  if (timeDifference < 50) {
    //Browser is being closed
    // Do something before browser closes.
  }
}