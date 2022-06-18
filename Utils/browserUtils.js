/**
 * https://javascript.plainenglish.io/how-to-detect-the-closing-of-a-browser-tab-94eee00a4e39
 */

const isPageReloaded = window.performance
                 .getEntriesByType('navigation')
                 .map(nav => nav.type)
                 .includes('reload');

console.log('isPageReloaded ', isPageReloaded)